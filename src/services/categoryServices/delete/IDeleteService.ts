import { Category } from "../../../entities/Category";

export interface IDeleteService {
  execute(id: string): Promise<Category>;
}
