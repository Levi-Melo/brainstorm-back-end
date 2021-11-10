import { Class } from "../../../entities/Class";

export interface ICreateService {
  execute(data: Class): Promise<Class>;
}
