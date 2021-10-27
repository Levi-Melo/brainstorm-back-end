import { getCustomRepository } from "typeorm";

import { Course } from "../../../entities/Course";
import { CourseRepository } from "../../../repositories/CourseRepository";

export class CreateService {
  async execute(data: Course) {
    const courseRepository = getCustomRepository(CourseRepository);

    const course = courseRepository.create(data);

    await courseRepository.save(course);

    return course;
  }
}
