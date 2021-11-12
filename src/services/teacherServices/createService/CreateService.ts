import { TeacherRepository } from "../../../repositories/TeacherRepository";
import { getCustomRepository } from "typeorm";
import { ICreateService } from "./ICreateService";
import { Teacher } from "../../../entities/Teacher";

export class CreateService implements ICreateService {
  async execute(data: Teacher) {
    const teacherRepository = getCustomRepository(TeacherRepository);

    const teacher = teacherRepository.create(data);

    await teacherRepository.save(teacher);
    return teacher;
  }
}
