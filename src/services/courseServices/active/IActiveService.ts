import { Course } from "../../../entities/Course";

export interface IActiveService {
  execute(id: string): Promise<Course>;
}
