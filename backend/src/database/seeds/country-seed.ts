import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CountryEntity } from '../../country/entity/country.entity';

export default class CountrySeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repo = dataSource.getRepository(CountryEntity);

    const country = repo.create({ name: 'Россия' });
    await repo.save(country);
  }
}
