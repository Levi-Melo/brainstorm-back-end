import { TeacherRepository } from "../../../repositories/TeacherRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const teacherRepository = getCustomRepository(TeacherRepository);

    const teacherExists = await teacherRepository.findOne({ id });

    teacherExists.active = true;
    return teacherRepository.save({
      ...teacherExists,
    });
  }
}
