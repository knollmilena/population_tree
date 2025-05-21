import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty({
    description: 'Город',
    example: 'Москва',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Население',
    example: 10000000,
  })
  @IsInt()
  @IsNotEmpty()
  data: number;
}
