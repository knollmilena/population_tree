import { Module } from '@nestjs/common';
import { HierarchyController } from './hierarchy.controller';
import {
  DEFAULT_HIERARCHY_CONFIG_TOKEN,
  HierarchyService,
} from './hierarchy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from '../country/entity/country.entity';
import { CityEntity } from '../city/entity/city.entity';
import { DistrictEntity } from '../district/entity/district.entity';
import { StreetEntity } from '../street/entity/street.entity';
import { HouseEntity } from '../house/entity/house.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CountryEntity,
      CityEntity,
      DistrictEntity,
      StreetEntity,
      HouseEntity,
    ]),
  ],
  controllers: [HierarchyController],
  providers: [
    HierarchyService,
    {
      provide: DEFAULT_HIERARCHY_CONFIG_TOKEN,
      useValue: {
        root: 'city',
        depth: ['district', 'street', 'resident'],
      },
    },
  ],
})
export class HierarchyModule {}
