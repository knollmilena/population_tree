import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from '../../city/entity/city.entity';
import { StreetEntity } from '../../street/entity/street.entity';

@Entity('district')
export class DistrictEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CityEntity, (city) => city.districts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @OneToMany(() => StreetEntity, (street) => street.district)
  streets: StreetEntity[];
}
