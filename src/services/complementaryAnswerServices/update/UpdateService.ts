import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export class UpdateService implements IUpdateService {
  async execute(data: ComplementaryAnswer) {
    const answerRepository = getCustomRepository(ComplementaryAnswerRepository);

    return answerRepository.save({
      ...data,
    });
  }
}
