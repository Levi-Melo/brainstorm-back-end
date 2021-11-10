import { ClassRepository } from "../../../repositories/ClassRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { Class } from "../../../entities/Class";

export class UpdateService implements IUpdateService {
  async execute(data: Class) {
    const classRepository = getCustomRepository(ClassRepository);

    return classRepository.save({
      ...data,
    });
  }
}
