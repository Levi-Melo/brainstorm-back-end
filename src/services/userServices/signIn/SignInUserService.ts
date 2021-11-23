import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { ISignInUserRequest, ISignInUserService } from "./ISignInUserService";

import { sign } from "jsonwebtoken";

import { Fail } from "../../../entities/Error";

class SignInUserService implements ISignInUserService {
  async execute({ email, password }: ISignInUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: { email },
      join: {
        alias: "user",
      },
    });
    if (!user) throw new Fail(404, "Incorrect email or password");

    const token = sign(
      {
        userId: user.id,
        email,
      },
      process.env.SECRET,
      {
        expiresIn: `1 d`,
      }
    );

    return token;
  }
}

export { SignInUserService };
