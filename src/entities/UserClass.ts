import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { uuid } from "uuidv4";
import { Class } from "./Class";
import { Role } from "./Role";
import { User } from "./User";

@Entity("UsersClasses")
export class UserClass {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne((type) => Role, (role) => role.id)
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
