import { QuestionRepository } from "../../../repositories/QuestionRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const questionRepository = getCustomRepository(QuestionRepository);

    const question = await questionRepository.findOne({
      id,
    });

    question.active = false;
    return questionRepository.save({
      ...question,
    });
  }
}
