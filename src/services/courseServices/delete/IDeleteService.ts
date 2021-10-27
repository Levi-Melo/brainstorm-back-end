import { Course } from "../../../entities/Course";

export interface IDeleteService {
  execute(id: string): Promise<Course>;
}
