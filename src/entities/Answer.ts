import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { User } from "./User";

@Entity("answers")
export class Answer {
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

  @JoinColumn({ name: "question_id" })
  @ManyToOne((type) => Question, (Question) => Question.id)
  public question: Question;

  constructor(
    Answer: Omit<
      Answer,
      "id" | "active" | "confirmationCode" | "confirmedAccount"
    >,
    id?: string
  ) {
    Object.assign(this, Answer);
    if (!id) {
      this.id = uuid();
      this.active = true;
    } else {
      this.id = id;
    }
  }
}
