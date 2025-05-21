import { Module } from '@nestjs/common';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictEntity } from './entity/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistrictEntity])],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
