import { hash } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IResetPassword } from "./IResetPassword";

import { Fail } from "../../../entities/Error";

export class ResetPassword implements IResetPassword {
  async execute(email: string, confirmationCode: string, newPassword: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) throw new Fail(404, "Couldn't find an User");

    if (!user.confirmedAccount)
      throw new Fail(403, "This account has not been confirmed yet");

    if (!user.active)
      throw new Fail(
        403,
        "Cannot change the password from an inactive account"
      );

    if (!(user.confirmationCode == confirmationCode))
      throw new Fail(400, "Wrong confirmation code");

    user.password = await hash(newPassword, 10);

    const response = userRepository.save({ ...user });

    return response;
  }
}
