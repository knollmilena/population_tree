import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityDto {
  @ApiProperty({
    description: 'Город',
    example: 'Москва',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Население',
    example: 4000000,
  })
  @IsInt()
  @IsOptional()
  data?: number;
}
