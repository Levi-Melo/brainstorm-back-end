import { Class } from "../../../entities/Class";

type filterData = {
  name?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<Class[]>;
}
