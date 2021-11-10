import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as generateUuid } from "uuid";
import { User } from "./User";

@Entity("contacts")
class Contact {
  @PrimaryColumn()
  public readonly id: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: Date;

  @Column()
  public contactName: string;

  @Column()
  public phoneNumber: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User, (user) => user.id)
  public user: User;

  @Column()
  public active: boolean;

  constructor(Contact: Omit<Contact, "id" | "active">, id?: string) {
    Object.assign(this, Contact);

    if (!id) {
      this.active = true;
      this.id = generateUuid();
    } else {
      this.id = id;
    }
  }
}

export { Contact };
