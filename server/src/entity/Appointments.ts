import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Patients } from "./Patients";
import { Doctors } from "./Doctors";
import { AcceptedProviders } from "./AcceptedProviders";

@Entity()
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  insurance_id: number;

  @Column({ type: "datetime" })
  appointment_date: Date;

  @Column({ type: "json" })
  patient_info: JSON;

  @ManyToOne(() => Patients, (patient) => patient.id)
  patient: Patients;

  @ManyToOne(() => Doctors, (doctor) => doctor.id)
  doctor: Doctors;

  @ManyToOne(() => AcceptedProviders, (provider) => provider.id)
  provider: AcceptedProviders;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;
}
