import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CityEntity } from '../../city/entity/city.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { DistrictEntity } from '../../district/entity/district.entity';
import { StreetEntity } from '../../street/entity/street.entity';
import { HouseEntity } from '../../house/entity/house.entity';

@Entity('resident')
export class ResidentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CountryEntity)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @ManyToOne(() => CityEntity)
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @ManyToOne(() => DistrictEntity)
  @JoinColumn({ name: 'district_id' })
  district: DistrictEntity;

  @ManyToOne(() => StreetEntity)
  @JoinColumn({ name: 'street_id' })
  street: StreetEntity;

  @ManyToOne(() => HouseEntity, (house) => house.residents)
  @JoinColumn({ name: 'house_id' })
  house: HouseEntity;
}
