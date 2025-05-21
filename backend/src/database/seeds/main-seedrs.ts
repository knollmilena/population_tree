import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import DistrictsSeeder from './district-seed';
import StreetsSeeder from './street-seed';
import HousesSeeder from './house-seed';
import ResidentsSeeder from './resident-seed';
import CountrySeeder from './country-seed';
import CitiesSeeder from './gcity-seed';

export class MainSeeder implements Seeder {
  async run(databaseSource: DataSource): Promise<void> {
    await databaseSource.query(
      `TRUNCATE TABLE "resident" RESTART IDENTITY CASCADE`,
    );
    await databaseSource.query(
      `TRUNCATE TABLE "house" RESTART IDENTITY CASCADE`,
    );
    await databaseSource.query(
      `TRUNCATE TABLE "street" RESTART IDENTITY CASCADE`,
    );
    await databaseSource.query(
      `TRUNCATE TABLE "district" RESTART IDENTITY CASCADE`,
    );
    await databaseSource.query(
      `TRUNCATE TABLE "city" RESTART IDENTITY CASCADE`,
    );
    await databaseSource.query(
      `TRUNCATE TABLE "country" RESTART IDENTITY CASCADE`,
    );

    await runSeeder(databaseSource, CountrySeeder);
    await runSeeder(databaseSource, CitiesSeeder);
    await runSeeder(databaseSource, DistrictsSeeder);
    await runSeeder(databaseSource, StreetsSeeder);
    await runSeeder(databaseSource, HousesSeeder);
    await runSeeder(databaseSource, ResidentsSeeder);
  }
}
