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
import { Category } from "./Category";
import { User } from "./User";

@Entity("Courses")
export class Course {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @Column()
  public description: string;

  @Column()
  public name: string;

  @Column()
  public certificated: boolean;

  @Column()
  public active: boolean;

  @JoinColumn({ name: "category_id" })
  @ManyToOne((type) => Category, (Category) => Category.id)
  public category: Category;

  @JoinColumn({ name: "user_id" })
  @ManyToOne((type) => User, (User) => User.id)
  public user: User;

  constructor(
    Course: Omit<
      Course,
      "id" | "active" | "confirmationCode" | "confirmedAccount"
    >,
    id?: string
  ) {
    Object.assign(this, Course);
    if (!id) {
      this.id = uuid();
      this.active = true;
    } else {
      this.id = id;
    }
  }
}
