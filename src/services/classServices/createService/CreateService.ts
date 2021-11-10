import { ClassRepository } from "../../../repositories/ClassRepository";
import { getCustomRepository } from "typeorm";
import { Class } from "../../../entities/Class";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
  async execute(data: Class) {
    const lessonRepository = getCustomRepository(ClassRepository);

    const lesson = lessonRepository.create(data);

    await lessonRepository.save(lesson);
    return lesson;
  }
}
