import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
  IsArray,
  ValidateNested,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateResidentDto {
  @ApiProperty({
    description: 'Имя человека',
    example: 'Олег',
  })
  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @ApiProperty({
    description: 'ID города, к которому прикреплён житель',
    example: 2,
  })
  @IsOptional()
  @IsNumber()
  cityId?: number;

  @ApiProperty({
    description: 'Массив ID групп, к которым прикреплён житель',
    example: [2, 3, 4],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @IsNumber()
  groupIds?: number[];
}
