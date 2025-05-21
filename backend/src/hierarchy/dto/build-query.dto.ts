import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Level } from '../types/hierarchy.type';

export class BuildQueryDto {
  @ApiPropertyOptional({
    enum: ['country', 'city', 'district', 'street', 'house', 'resident'],
    description: 'Начальный уровень иерархии',
  })
  @IsOptional()
  @IsEnum(['country', 'city', 'district', 'street', 'house', 'resident'])
  root?: Level;

  @ApiPropertyOptional({
    type: [String],
    enum: ['country', 'city', 'district', 'street', 'house', 'resident'],
    description: 'Глубина иерархии',
  })
  @IsOptional()
  @IsArray()
  @IsEnum(['country', 'city', 'district', 'street', 'house', 'resident'], {
    each: true,
  })
  @Type(() => String)
  depth?: Level[];
}
