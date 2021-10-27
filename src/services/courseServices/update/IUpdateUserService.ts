import { Course } from "../../../entities/Course";

export interface IUpdateService {
  execute(data: Course): Promise<Course>;
}
