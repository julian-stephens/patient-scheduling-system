import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
