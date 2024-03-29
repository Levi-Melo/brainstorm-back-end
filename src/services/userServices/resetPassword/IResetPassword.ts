import { User } from "../../../entities/User";

export interface IResetPassword {
  execute(
    email: string,
    confirmationCode: string,
    newPassword: string
  ): Promise<User>;
}
