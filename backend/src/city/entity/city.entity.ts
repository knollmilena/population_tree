import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { DistrictEntity } from '../../district/entity/district.entity';
import { CountryEntity } from '../../country/entity/country.entity';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  data: number;

  @ManyToOne(() => CountryEntity, (country) => country.cities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @OneToMany(() => DistrictEntity, (district) => district.city)
  districts: DistrictEntity[];
}
