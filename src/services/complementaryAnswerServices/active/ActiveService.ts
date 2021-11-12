import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const complementaryAnswerRepositoryRepository = getCustomRepository(
      ComplementaryAnswerRepository
    );

    const complementaryAnswerRepositoryExists =
      await complementaryAnswerRepositoryRepository.findOne({ id });

    complementaryAnswerRepositoryExists.active = true;
    return complementaryAnswerRepositoryRepository.save({
      ...complementaryAnswerRepositoryExists,
    });
  }
}
