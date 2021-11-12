import { UserClassRepository } from "../../../repositories/UserClassRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { UserClass } from "../../../entities/UserClass";

export class UpdateService implements IUpdateService {
  async execute(data: UserClass) {
    const userClassRepository = getCustomRepository(UserClassRepository);

    return userClassRepository.save({
      ...data,
    });
  }
}
