import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as generateUuid } from "uuid";

@Entity("Classes")
export class Class {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public link: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: Date;

  @Column()
  public active: boolean;

  constructor(Class: Omit<Class, "id" | "active">, id?: string) {
    Object.assign(this, Class);

    if (!id) {
      this.active = true;
      this.id = generateUuid();
    } else {
      this.id = id;
    }
  }
}
