import { ClassRepository } from "../../../repositories/ClassRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const classRepository = getCustomRepository(ClassRepository);

    const lesson = await classRepository.findOne({ id });

    lesson.active = false;
    return classRepository.save({
      ...lesson,
    });
  }
}
