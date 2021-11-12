import { getCustomRepository } from "typeorm";
import { TeacherRepository } from "../../../repositories/TeacherRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const teacherRepository = getCustomRepository(TeacherRepository);

    return teacherRepository.findOne({
      where: [{ id }],
      join: {
        alias: "teacher",
        innerJoinAndSelect: {
          user: "teacher.user",
        },
      },
    });
  }
}
