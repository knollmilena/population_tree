import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DistrictEntity } from '../../district/entity/district.entity';
import { CityEntity } from '../../city/entity/city.entity';

interface IDistricts {
  name: string;
  city: CityEntity;
}
export default class DistrictsSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const districtRepo = dataSource.getRepository(DistrictEntity);
    const cityRepo = dataSource.getRepository(CityEntity);

    const cities = await cityRepo.find();

    const districts: IDistricts[] = [];

    for (const city of cities) {
      const count = Math.floor(Math.random() * 3) + 2;
      for (let i = 1; i <= count; i++) {
        districts.push({
          name: `${city.name} район ${i}`,
          city: city,
        });
      }
    }

    await districtRepo.save(districts);
  }
}
