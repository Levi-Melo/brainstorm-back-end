import { AnswerRepository } from "../../../repositories/AnswerRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const answerRepository = getCustomRepository(AnswerRepository);

    const AnswerRepositoryExists = await answerRepository.findOne({ id });

    AnswerRepositoryExists.active = true;
    return answerRepository.save({
      ...AnswerRepositoryExists,
    });
  }
}
