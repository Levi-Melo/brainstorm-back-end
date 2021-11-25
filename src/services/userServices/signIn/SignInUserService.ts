import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { ISignInUserRequest, ISignInUserService } from "./ISignInUserService";

import { sign } from "jsonwebtoken";

import { Fail } from "../../../entities/Error";

class SignInUserService implements ISignInUserService {
  async execute({ email, password }: ISignInUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: { email, password },
    });
    if (!user) throw new Fail(404, "Incorrect email or password");
    if (!user.active) {
      throw new Fail(401, "User is not active contact a administrator");
    }

    const token = sign(
      {
        email,
      },
      process.env.SECRET,
      {
        expiresIn: `1 d`,
        subject: user.id,
      }
    );

    return token;
  }
}

export { SignInUserService };
