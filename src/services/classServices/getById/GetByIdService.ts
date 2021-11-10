import { getCustomRepository } from "typeorm";
import { ClassRepository } from "../../../repositories/ClassRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const classRepository = getCustomRepository(ClassRepository);

    return classRepository.findOne({
      where: [{ id }],
      join: {
        alias: "class",
        innerJoinAndSelect: {
          user: "class.user",
        },
      },
    });
  }
}
