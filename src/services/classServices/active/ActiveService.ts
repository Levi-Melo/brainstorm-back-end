import { ClassRepository } from "../../../repositories/ClassRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const classRepository = getCustomRepository(ClassRepository);

    const classExists = await classRepository.findOne({ id });

    classExists.active = true;
    return classRepository.save({
      ...classExists,
    });
  }
}
