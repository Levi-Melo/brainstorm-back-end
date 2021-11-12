import { Teacher } from "../../../entities/Teacher";

type filterData = {
  name?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<Teacher[]>;
}
