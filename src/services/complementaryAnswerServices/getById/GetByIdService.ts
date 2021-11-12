import { getCustomRepository } from "typeorm";
import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const classRepository = getCustomRepository(ComplementaryAnswerRepository);

    return classRepository.findOne({
      where: [{ id }],
      join: {
        alias: "ComplementaryAnswer",
        innerJoinAndSelect: {
          user: "ComplementaryAnswer.user",
        },
      },
    });
  }
}
