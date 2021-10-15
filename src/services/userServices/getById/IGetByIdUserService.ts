import { User } from "../../../entities/User";

export interface IGetByIdUserService {
  execute(id: string): Promise<User>;
}
