import { Category } from "../../../entities/Category";

export interface IGetByIdService {
  execute(id: string): Promise<Category>;
}
