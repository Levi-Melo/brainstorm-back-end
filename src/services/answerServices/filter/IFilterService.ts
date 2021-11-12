import { Answer } from "../../../entities/Answer";

type filterData = {
  name?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<Answer[]>;
}
