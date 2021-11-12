import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

type filterData = {
  name?: string;
  initials?: string;
  active?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<ComplementaryAnswer[]>;
}
