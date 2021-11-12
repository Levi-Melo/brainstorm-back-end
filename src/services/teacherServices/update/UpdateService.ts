import { TeacherRepository } from "../../../repositories/TeacherRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { Teacher } from "../../../entities/Teacher";

export class UpdateService implements IUpdateService {
  async execute(data: Teacher) {
    const teacherRepository = getCustomRepository(TeacherRepository);

    return teacherRepository.save({
      ...data,
    });
  }
}
