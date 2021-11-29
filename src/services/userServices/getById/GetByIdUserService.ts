import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IGetByIdUserService } from "./IGetByIdUserService";

class GetByIdUserService implements IGetByIdUserService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({
      where: [{ id: id }],
    });

    return user;
  }
}

export { GetByIdUserService };
