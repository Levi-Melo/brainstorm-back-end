import { UserRepository } from "../../../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ id });

    userExists.active = true;
    return userRepository.save({
      ...userExists,
    });
  }
}
