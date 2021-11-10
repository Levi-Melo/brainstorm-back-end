import { Class } from "../../../entities/Class";

export interface IGetByIdService {
  execute(id: string): Promise<Class>;
}
