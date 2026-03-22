import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name' })
  full_name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password' })
  password: string;

  @ApiProperty({ example: '0123456789', description: 'Phone number', required: false })
  phone?: string;

  @ApiProperty({ example: 1, description: 'Role ID' })
  role_id: bigint;
}
