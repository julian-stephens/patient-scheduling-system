import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { States } from "./States";

@Entity()
export class Patients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  phone: string;

  @Column({ length: 1 })
  sex: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  zip_code: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @OneToOne(() => States)
  @JoinColumn()
  state: States;
}
