import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { CityEntity } from '../city/entity/city.entity';
import { ResidentEntity } from '../residents/entity/residents.entity';
import { CountryEntity } from '../country/entity/country.entity';
import { DistrictEntity } from '../district/entity/district.entity';
import { StreetEntity } from '../street/entity/street.entity';
import { HouseEntity } from '../house/entity/house.entity';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    CountryEntity,
    CityEntity,
    ResidentEntity,
    DistrictEntity,
    StreetEntity,
    HouseEntity,
  ],
  synchronize: true,
});
