import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinTable,
} from "typeorm";
import { Address } from "./Address";

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToOne(() => Address)
  @JoinTable()
  address: Address;
}
