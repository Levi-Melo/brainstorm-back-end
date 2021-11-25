import { IFilterService } from "./IFilterService";
import { QuestionRepository } from "../../../repositories/QuestionRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  text?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const questionRepository = getCustomRepository(QuestionRepository);
    const results = await questionRepository.find({
      where: data,
      join: {
        alias: "question",
        innerJoinAndSelect: {
          user: "question.user",
          class: "question.class",
        },
      },
    });
    return results;
  }
}
