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
import { Course } from "./Course";

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

  @JoinColumn({ name: "course_id" })
  @ManyToOne((type) => Course, (Course) => Course.id)
  public course: Course;

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
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
