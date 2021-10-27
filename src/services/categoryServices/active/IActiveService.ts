import { Category } from "../../../entities/Category";

export interface IActiveService {
  execute(id: string): Promise<Category>;
}
