import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("Categories")
@Unique(["name", "initials"])
export class Category {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column()
  public initials: string;

  @Column()
  public image: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: Date;
  @Column()
  public active: boolean;

  constructor(Category: Omit<Category, "id" | "active">, id?: string) {
    Object.assign(this, Category);

    if (!id) {
      this.active = true;
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
