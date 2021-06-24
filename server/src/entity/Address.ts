import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5000 })
  line1: "text";

  @Column({ length: 5000 })
  line2: "text";

  @Column({ length: 5000 })
  city: "text";

  @Column({ length: 5000 })
  country: "text";

  @Column({ length: 5000 })
  postal_code: "text";

  @Column({ length: 5000 })
  state: "text";
}
