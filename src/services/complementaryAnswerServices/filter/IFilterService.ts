import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

type filterData = {
  name?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<ComplementaryAnswer[]>;
}
