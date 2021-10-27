import { CourseRepository } from "../../../repositories/CourseRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository);

    const courseExists = await courseRepository.findOne({ id });

    courseExists.active = true;
    return courseRepository.save({
      ...courseExists,
    });
  }
}
