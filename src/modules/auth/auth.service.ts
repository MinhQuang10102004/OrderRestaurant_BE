import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    // In UserService we need direct access to repository to find by email
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    
    // For now if passwords aren't hashed, we may need to compare plain text,
    // assuming we update the register to hash passwords.
    // if (loginDto.password !== user.password) {
    if (!isPasswordValid && loginDto.password !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id.toString(), email: user.email, role_id: user.role_id.toString() };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id.toString(),
        email: user.email,
        full_name: user.full_name,
        role_id: user.role_id.toString()
      }
    };
  }
}
