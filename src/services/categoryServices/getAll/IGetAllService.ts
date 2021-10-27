import { Category } from "../../../entities/Category";

export interface IGetAllService {
  execute(): Promise<Category[]>;
}
