import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";

class DeleteUserService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ id: id });

    user.active = false;
    const response = await userRepository.save({ ...user });

    return response;
  }
}

export { DeleteUserService };
