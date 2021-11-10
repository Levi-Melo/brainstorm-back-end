import { Class } from "../../../entities/Class";

export interface IActiveService {
  execute(id: string): Promise<Class>;
}
