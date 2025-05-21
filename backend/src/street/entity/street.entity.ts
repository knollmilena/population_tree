import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DistrictEntity } from '../../district/entity/district.entity';
import { HouseEntity } from '../../house/entity/house.entity';

@Entity('street')
export class StreetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => DistrictEntity, (district) => district.streets, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'district_id' })
  district: DistrictEntity;

  @OneToMany(() => HouseEntity, (house) => house.street)
  houses: HouseEntity[];
}
