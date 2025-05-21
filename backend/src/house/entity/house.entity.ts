import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResidentEntity } from '../../residents/entity/residents.entity';
import { StreetEntity } from '../../street/entity/street.entity';

@Entity('house')
export class HouseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => StreetEntity, (street) => street.houses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'street_id' })
  street: StreetEntity;

  @OneToMany(() => ResidentEntity, (resident) => resident.house)
  residents: ResidentEntity[];
}
