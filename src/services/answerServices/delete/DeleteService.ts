import { AnswerRepository } from "../../../repositories/AnswerRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const answerRepository = getCustomRepository(AnswerRepository);

    const answer = await answerRepository.findOne({
      id,
    });

    answer.active = false;
    return answerRepository.save({
      ...answer,
    });
  }
}
