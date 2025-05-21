import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { StreetEntity } from '../../street/entity/street.entity';
import { DistrictEntity } from '../../district/entity/district.entity';

interface IStreet {
  name: string;
  district: DistrictEntity;
}
export default class StreetsSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const streetRepo = dataSource.getRepository(StreetEntity);
    const districtRepo = dataSource.getRepository(DistrictEntity);

    const districts = await districtRepo.find();

    const streets: IStreet[] = [];

    for (const district of districts) {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let i = 1; i <= count; i++) {
        streets.push({
          name: `Улица ${district.name.slice(2, -5)}${i}`,
          district: district,
        });
      }
    }

    await streetRepo.save(streets);
  }
}
