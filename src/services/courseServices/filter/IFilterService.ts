import { Course } from "../../../entities/Course";

type filterData = {
  name?: string;
  category?: string;
  certificated?: string;
  description?: string;
  user?: string;
};

export interface IFilterService {
  execute(data: filterData): Promise<Course[]>;
}
