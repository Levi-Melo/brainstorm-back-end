import { User } from "../../../entities/User";

export interface IDeleteUserService {
  execute(data: User): Promise<User>;
}
