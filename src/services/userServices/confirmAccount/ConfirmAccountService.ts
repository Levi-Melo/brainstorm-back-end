import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IConfirmAccountService } from "./IConfirmAccountService";

export class ConfirmAccountService implements IConfirmAccountService {
  async execute(id: string, confirmationCode: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ id: id });
    if (!user) return;

    if (user.confirmationCode == confirmationCode) {
      user.confirmedAccount = true;
    } else {
      throw new Error();
    }

    return user;
  }
}
