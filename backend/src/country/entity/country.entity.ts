import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CityEntity } from '../../city/entity/city.entity';

@Entity('country')
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => CityEntity, (city) => city.country, { nullable: true })
  cities: CityEntity[];
}
