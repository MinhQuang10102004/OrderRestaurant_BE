import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'john@example.com', description: 'User Email' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'User Password' })
  password: string;
}
