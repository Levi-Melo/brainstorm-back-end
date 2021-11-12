import { getCustomRepository } from "typeorm";
import { AnswerRepository } from "../../../repositories/AnswerRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const answerRepository = getCustomRepository(AnswerRepository);

    return answerRepository.findOne({
      where: [{ id }],
      join: {
        alias: "answer",
        innerJoinAndSelect: {
          user: "answer.user",
        },
      },
    });
  }
}
