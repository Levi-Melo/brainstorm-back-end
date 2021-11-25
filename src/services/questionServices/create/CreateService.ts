import { QuestionRepository } from "../../../repositories/QuestionRepository";
import { getCustomRepository } from "typeorm";
import { ICreateService } from "./ICreateService";
import { Question } from "../../../entities/Question";

export class CreateService implements ICreateService {
  async execute(data: Question) {
    const questionRepository = getCustomRepository(QuestionRepository);

    const question = questionRepository.create(data);

    await questionRepository.save(question);
    return question;
  }
}
