import { TeacherRepository } from "../../../repositories/TeacherRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const teacherRepository = getCustomRepository(TeacherRepository);

    const teacher = await teacherRepository.findOne({
      id,
    });

    teacher.active = false;
    return teacherRepository.save({
      ...teacher,
    });
  }
}
