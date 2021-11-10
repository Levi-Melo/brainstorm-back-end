import { Class } from "../../../entities/Class";

export interface IUpdateService {
  execute(data: Class): Promise<Class>;
}
