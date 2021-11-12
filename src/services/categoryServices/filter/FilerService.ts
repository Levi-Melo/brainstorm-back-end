import { IFilterService } from "./IFilterService";
import { ComplementaryAnswerRepository } from "../../../repositories/ComplementaryAnswerRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  name?: string;
  initials?: string;
  active?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const classRepository = getCustomRepository(ComplementaryAnswerRepository);
    const results = await classRepository.find({
      where: data,
      join: {
        alias: "ComplementaryAnswerRepository",
        innerJoinAndSelect: {
          user: "ComplementaryAnswerRepository.user",
        },
      },
    });
    return results;
  }
}
