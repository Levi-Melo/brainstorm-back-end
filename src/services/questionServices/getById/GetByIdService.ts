import { getCustomRepository } from "typeorm";
import { QuestionRepository } from "../../../repositories/QuestionRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const questionRepository = getCustomRepository(QuestionRepository);

    return questionRepository.findOne({
      where: [{ id }],
      join: {
        alias: "question",
        innerJoinAndSelect: {
          user: "question.user",
          class: "question.class",
        },
      },
    });
  }
}
