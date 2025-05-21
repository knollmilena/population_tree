import { Module } from '@nestjs/common';
import { StreetController } from './street.controller';
import { StreetService } from './street.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreetEntity } from './entity/street.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreetEntity])],
  controllers: [StreetController],
  providers: [StreetService],
})
export class StreetModule {}
