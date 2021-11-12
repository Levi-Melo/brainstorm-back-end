import { IFilterService } from "./IFilterService";
import { TeacherRepository } from "../../../repositories/TeacherRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  name?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const teacherRepository = getCustomRepository(TeacherRepository);
    const results = await teacherRepository.find({
      where: data,
      join: {
        alias: "teacher",
        innerJoinAndSelect: {
          user: "teacher.user",
        },
      },
    });
    return results;
  }
}
