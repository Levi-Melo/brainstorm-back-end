import { User } from "../../../entities/User";

export interface IConfirmAccountService {
  execute(id: string, confirmationCode: string): Promise<User>;
}
