import { Course } from "../../../entities/Course";

export interface IGetByIdService {
  execute(id: string): Promise<Course>;
}
