import { getCustomRepository } from "typeorm";

import { CourseRepository } from "../../../repositories/CourseRepository";
import { IFilterService } from "./IFilterService";

type filterData = {
  name?: string;
  category?: string;
  certificated?: string;
  description?: string;
  user?: string;
  active?: boolean;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const courseRepository = getCustomRepository(CourseRepository);

    const course = await courseRepository.find({
      where: data,
      join: {
        alias: "course",
        innerJoinAndSelect: {
          category: "course.category",
        },
      },
    });
    return course;
  }
}
