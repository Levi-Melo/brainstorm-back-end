import { Class } from "../../../entities/Class";

export interface IDeleteService {
  execute(id: string): Promise<Class>;
}
