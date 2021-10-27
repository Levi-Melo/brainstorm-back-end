import { Category } from "../../../entities/Category";

export interface ICreateService {
  execute(data: Category): Promise<Category>;
}
