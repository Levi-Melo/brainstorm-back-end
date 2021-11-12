import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";
import { getCustomRepository } from "typeorm";
import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
  async execute(data: ComplementaryAnswer) {
    const complementaryAnswerRepository = getCustomRepository(
      ComplementaryAnswerRepository
    );

    const complementaryAnswer = complementaryAnswerRepository.create(data);

    await complementaryAnswerRepository.save(complementaryAnswer);
    return complementaryAnswer;
  }
}
