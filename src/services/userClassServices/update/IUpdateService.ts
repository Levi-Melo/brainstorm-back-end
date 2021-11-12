import { UserClass } from "../../../entities/UserClass";

export interface IUpdateService {
  execute(data: UserClass): Promise<UserClass>;
}
