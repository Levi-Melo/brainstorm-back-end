import { IFilterService } from "./IFilterService";
import { AnswerRepository } from "../../../repositories/AnswerRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  name?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const answerRepository = getCustomRepository(AnswerRepository);
    const results = await answerRepository.find({
      where: data,
      join: {
        alias: "answer",
        innerJoinAndSelect: {
          user: "answer.user",
        },
      },
    });
    return results;
  }
}
