import { User } from "../../../entities/User";

export interface IActiveService {
  execute(id: string): Promise<User>;
}
