import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  phone: string;
}
