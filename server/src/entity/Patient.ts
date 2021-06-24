import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  ManyToMany
  JoinColumn,
  JoinTable
} from "typeorm";
import {Medication} from "./Medication";
import {Address} from "./Address";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ length: 1 })
  sex: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => Pharmacy)
  @JoinColumn()
  pharmacy: Pharmacy;

  @ManyToMany(() => Medication)
  @JoinTable()
  medications: Medication[];
}
