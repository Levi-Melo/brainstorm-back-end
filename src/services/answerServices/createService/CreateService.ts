import { AnswerRepository } from "../../../repositories/AnswerRepository";
import { getCustomRepository } from "typeorm";
import { ICreateService } from "./ICreateService";
import { Answer } from "../../../entities/Answer";

export class CreateService implements ICreateService {
  async execute(data: Answer) {
    const answerRepository = getCustomRepository(AnswerRepository);

    const answer = answerRepository.create(data);

    await answerRepository.save(answer);
    return answer;
  }
}
