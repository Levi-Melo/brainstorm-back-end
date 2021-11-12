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
import { Answer } from "./Answer";
import { User } from "./User";

@Entity("ComplementaryAnswers")
export class ComplementaryAnswer {
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
  @ManyToOne((type) => Answer, (Answer) => Answer.id)
  public answer: Answer;

  constructor(
    ComplementaryAnswer: Omit<
      ComplementaryAnswer,
      "id" | "active" | "confirmationCode" | "confirmedAccount"
    >,
    id?: string
  ) {
    Object.assign(this, ComplementaryAnswer);
    if (!id) {
      this.id = uuid();
      this.active = true;
    } else {
      this.id = id;
    }
  }
}
