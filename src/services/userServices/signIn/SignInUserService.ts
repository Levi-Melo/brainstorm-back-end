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
        leftJoinAndSelect: {
          role: "user.role",
        },
      },
    });

    if (!user.role.active) {
      throw new Fail(401, "User role is not active contact a administrator");
    }
    if (!user) throw new Fail(404, "Incorrect email or password");

    if (!user.role.active)
      throw new Fail(403, "User role is not active contact a administrator");

    const token = sign(
      {
        userId: user.id,
        email,
        role: user.role,
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
