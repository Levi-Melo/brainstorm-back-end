import { getCustomRepository } from "typeorm";
import { CourseRepository } from "../../../repositories/CourseRepository";
import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository);
    const course = await courseRepository.findOne({
      where: [{ id: id }],
    });

    return course;
  }
}
