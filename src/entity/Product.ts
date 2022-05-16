import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column({ type: "varchar" })
  public code: string;

  @Column({ type: "varchar" })
  public name: string;

}
