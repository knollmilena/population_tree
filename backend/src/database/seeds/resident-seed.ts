import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { HouseEntity } from '../../house/entity/house.entity';
import { CityEntity } from '../../city/entity/city.entity';
import { DistrictEntity } from '../../district/entity/district.entity';
import { StreetEntity } from '../../street/entity/street.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { ResidentEntity } from '../../residents/entity/residents.entity';

interface IResident {
  name: string;
  country: CountryEntity;
  city: CityEntity;
  district: DistrictEntity;
  street: StreetEntity;
  house: HouseEntity;
}

function generateName(): string {
  const syllables = [
    'ми',
    'на',
    'ко',
    'лу',
    'ра',
    'се',
    'та',
    'ро',
    'ка',
    'ве',
  ];
  const length = Math.floor(Math.random() * 2) + 2;
  let name = 'Житель ';
  for (let i = 0; i < length; i++) {
    name += syllables[Math.floor(Math.random() * syllables.length)];
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default class ResidentsSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const residentRepo = dataSource.getRepository(ResidentEntity);
    const houseRepo = dataSource.getRepository(HouseEntity);

    const houses = await houseRepo.find({
      relations: [
        'street',
        'street.district',
        'street.district.city',
        'street.district.city.country',
      ],
    });

    const residents: IResident[] = [];

    for (const house of houses) {
      const count = Math.floor(Math.random()) + 1;

      for (let i = 0; i < count; i++) {
        residents.push({
          name: generateName(),
          country: house.street.district.city.country,
          city: house.street.district.city,
          district: house.street.district,
          street: house.street,
          house: house,
        });
      }
    }

    await residentRepo.save(residents);
  }
}
