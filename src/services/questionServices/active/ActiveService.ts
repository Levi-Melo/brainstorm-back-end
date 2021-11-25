import { QuestionRepository } from "../../../repositories/QuestionRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const questionRepository = getCustomRepository(QuestionRepository);

    const questionExists = await questionRepository.findOne({ id });

    questionExists.active = true;
    return questionRepository.save({
      ...questionExists,
    });
  }
}
