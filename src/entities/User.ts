import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @Column()
  public cpf: string;

  @Column()
  public rg: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public active: boolean;

  @Column()
  public type: string;

  @Column()
  public confirmationCode: string;

  @Column()
  public confirmedAccount: boolean;

  constructor(
    User: Omit<User, "id" | "active" | "confirmationCode" | "confirmedAccount">,
    id?: string
  ) {
    Object.assign(this, User);
    if (!id) {
      this.id = uuid();
      this.confirmationCode = this.generationCode();
      this.active = true;
      this.confirmedAccount = false;
    } else {
      this.id = id;
    }
  }
  private generationCode() {
    let CodeVerification = "P";
    for (let i = 0; i < 6; i++) {
      CodeVerification += Math.floor(Math.random() * 10 + 1).toString();
    }
    return CodeVerification;
  }
}
