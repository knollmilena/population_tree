import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseEntity } from './entity/house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
