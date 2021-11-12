import { IFilterService } from "./IFilterService";
import { UserClassRepository } from "../../../repositories/UserClassRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  text?: string;
  user?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const userClassRepository = getCustomRepository(UserClassRepository);
    const results = await userClassRepository.find({
      where: data,
      join: {
        alias: "userClass",
        innerJoinAndSelect: {
          user: "userClass.user",
        },
      },
    });
    return results;
  }
}
