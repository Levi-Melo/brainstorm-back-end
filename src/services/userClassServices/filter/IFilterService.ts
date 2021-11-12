import { UserClass } from "../../../entities/UserClass";

type filterData = {
  text?: string;
  user?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<UserClass[]>;
}
