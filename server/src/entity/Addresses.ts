import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Patients } from "./Patients";

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  address: string;

  @OneToOne(() => Patients)
  patient: Patients;
}
