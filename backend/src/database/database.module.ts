import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ResidentEntity } from '../residents/entity/residents.entity';
import { CityEntity } from '../city/entity/city.entity';
import { CountryEntity } from '../country/entity/country.entity';
import { DistrictEntity } from '../district/entity/district.entity';
import { StreetEntity } from '../street/entity/street.entity';
import { HouseEntity } from '../house/entity/house.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: Number(configService.get('DB_PORT')),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          CountryEntity,
          DistrictEntity,
          StreetEntity,
          HouseEntity,
          ResidentEntity,
          CityEntity,
        ],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
