import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigOptions } from './configs/config.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { DistrictModule } from './district/district.module';
import { StreetModule } from './street/street.module';
import { HouseModule } from './house/house.module';
import { HierarchyModule } from './hierarchy/hirerarchy.module';
import { ResidentsModule } from './residents/residents.module';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigOptions),
    DatabaseModule,
    ResidentsModule,
    CountryModule,
    CityModule,
    DistrictModule,
    StreetModule,
    HouseModule,
    HierarchyModule,
  ],
})
export class AppModule {}
