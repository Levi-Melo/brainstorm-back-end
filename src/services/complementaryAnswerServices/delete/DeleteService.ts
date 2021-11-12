import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const complementaryAnswerRepository = getCustomRepository(
      ComplementaryAnswerRepository
    );

    const complementaryAnswer = await complementaryAnswerRepository.findOne({
      id,
    });

    complementaryAnswer.active = false;
    return complementaryAnswerRepository.save({
      ...complementaryAnswer,
    });
  }
}
