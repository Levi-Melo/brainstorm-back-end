import { getCustomRepository } from "typeorm";
import { UserClassRepository } from "../../../repositories/UserClassRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const userClassRepository = getCustomRepository(UserClassRepository);

    return userClassRepository.findOne({
      where: [{ id }],
      join: {
        alias: "userClass",
        innerJoinAndSelect: {
          user: "userClass.user",
        },
      },
    });
  }
}
