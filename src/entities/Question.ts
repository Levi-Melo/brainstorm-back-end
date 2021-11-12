import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { uuid } from "uuidv4";
import { User } from "./User";

@Entity("questions")
export class Question {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @Column()
  public text: string;

  @Column()
  public active: boolean;

  @JoinColumn({ name: "user_id" })
  @ManyToOne((type) => User, (User) => User.id)
  public user: User;

  constructor(
    Question: Omit<
      Question,
      "id" | "active" | "confirmationCode" | "confirmedAccount"
    >,
    id?: string
  ) {
    Object.assign(this, Question);
    if (!id) {
      this.id = uuid();
      this.active = true;
    } else {
      this.id = id;
    }
  }
}
