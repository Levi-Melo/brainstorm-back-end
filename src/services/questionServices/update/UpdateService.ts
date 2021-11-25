import { QuestionRepository } from "../../../repositories/QuestionRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { Question } from "../../../entities/Question";

export class UpdateService implements IUpdateService {
  async execute(data: Question) {
    const questionRepository = getCustomRepository(QuestionRepository);

    return questionRepository.save({
      ...data,
    });
  }
}
