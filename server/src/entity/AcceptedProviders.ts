import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AcceptedProviders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;
}
