import { Category } from "../../../entities/Category";

export interface IUpdateService {
  execute(data: Category): Promise<Category>;
}
