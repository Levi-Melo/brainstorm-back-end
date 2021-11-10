import { IFilterService } from "./IFilterService";
import { ClassRepository } from "../../../repositories/ClassRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  name?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const classRepository = getCustomRepository(ClassRepository);
    const results = await classRepository.find({
      where: data,
      join: {
        alias: "class",
        innerJoinAndSelect: {
          user: "class.user",
        },
      },
    });
    return results;
  }
}
