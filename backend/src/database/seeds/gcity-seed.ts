import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CityEntity } from '../../city/entity/city.entity';
import { CountryEntity } from '../../country/entity/country.entity';

export default class CitiesSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const cityRepo = dataSource.getRepository(CityEntity);
    const countryRepo = dataSource.getRepository(CountryEntity);

    const country = await countryRepo.findOneBy({ name: 'Россия' });

    if (!country) {
      throw new Error('Country "Россия" not found');
    }

    const cities = [
      {
        id: 1,
        name: 'Москва',
        data: 10000000,
        country,
      },
      {
        id: 2,
        name: 'Воронеж',
        data: 1000000,
        country,
      },
      {
        id: 3,
        name: 'Санкт-Петербург',
        data: 3000000,
        country,
      },
    ];

    for (const city of cities) {
      await cityRepo.save(city);
    }

    console.log('✅ Города добавлены');
  }
}
