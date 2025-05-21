import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { HouseEntity } from '../../house/entity/house.entity';
import { StreetEntity } from '../../street/entity/street.entity';

interface IHouse {
  name: string;
  street: StreetEntity;
}

export default class HousesSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const houseRepo = dataSource.getRepository(HouseEntity);
    const streetRepo = dataSource.getRepository(StreetEntity);

    const streets = await streetRepo.find();

    const houses: IHouse[] = [];

    for (const street of streets) {
      const count = Math.floor(Math.random() * 2) + 5;
      for (let i = 1; i <= count; i++) {
        houses.push({
          name: `${i}`,
          street: street,
        });
      }
    }

    await houseRepo.save(houses);
  }
}
