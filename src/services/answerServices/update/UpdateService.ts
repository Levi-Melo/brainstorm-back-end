import { AnswerRepository } from "../../../repositories/AnswerRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { Answer } from "../../../entities/Answer";

export class UpdateService implements IUpdateService {
  async execute(data: Answer) {
    const answerRepository = getCustomRepository(AnswerRepository);

    return answerRepository.save({
      ...data,
    });
  }
}
