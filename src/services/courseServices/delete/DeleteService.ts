import { getCustomRepository } from "typeorm";

import { CourseRepository } from "../../../repositories/CourseRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository);

    const course = await courseRepository.findOne({
      id,
    });

    course.active = false;
    await courseRepository.save(course);
    return course;
  }
}
