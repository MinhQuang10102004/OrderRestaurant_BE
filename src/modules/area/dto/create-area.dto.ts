import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty({ example: 'Indoor', description: 'Area name' })
  name: string;
}
