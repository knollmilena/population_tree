import { Module } from '@nestjs/common';
import { ResidentController } from './residents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentEntity } from './entity/residents.entity';
import { ResidentService } from './residents.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentEntity])],
  controllers: [ResidentController],
  providers: [ResidentService],
})
export class ResidentsModule {}
