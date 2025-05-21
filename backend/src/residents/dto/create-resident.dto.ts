import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
  IsArray,
  ValidateNested,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateResidentDto {
  @ApiProperty({
    description: 'Имя человека',
    example: 'Олег',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @ApiProperty({
    description: 'ID города, к которому прикреплён житель',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @ApiProperty({
    description: 'Массив ID групп, к которым прикреплён житель',
    example: [2, 3, 4],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @IsNumber()
  groupIds: number[];
}
