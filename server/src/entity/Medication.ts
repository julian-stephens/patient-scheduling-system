import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from "typeorm";
  
@Entity()
export class Medication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
  