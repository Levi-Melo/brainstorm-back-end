import { getCustomRepository } from "typeorm";

import { Course } from "../../../entities/Course";
import { CourseRepository } from "../../../repositories/CourseRepository";

export class UpdateService {
  async execute(data: Course) {
    const courseRepository = getCustomRepository(CourseRepository);
    return courseRepository.save({
      ...data,
    });
  }
}
