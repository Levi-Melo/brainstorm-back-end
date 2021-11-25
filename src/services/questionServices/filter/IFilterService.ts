import { Question } from "../../../entities/Question";

type filterData = {
  text?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<Question[]>;
}
