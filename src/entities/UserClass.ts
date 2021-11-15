import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Class } from "./Class";
import { User } from "./User";

@Entity("users_classes")
export class UserClass {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne((type) => User, (user) => user.id)
  public user: User;

  @JoinColumn({ name: "Class_id" })
  @ManyToOne((type) => Class, (Class) => Class.id)
  public class: Class;

  constructor(UserClass: Omit<UserClass, "id" | "active">, id?: string) {
    Object.assign(this, UserClass);
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
