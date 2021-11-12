import { UserClassRepository } from "../../../repositories/UserClassRepository";
import { getCustomRepository } from "typeorm";
import { ICreateService } from "./ICreateService";
import { UserClass } from "../../../entities/UserClass";

export class CreateService implements ICreateService {
  async execute(data: UserClass) {
    const userClassRepository = getCustomRepository(UserClassRepository);

    const userClass = userClassRepository.create(data);

    await userClassRepository.save(userClass);
    return userClass;
  }
}
