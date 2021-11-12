import { UserClass } from "../../../entities/UserClass";

export interface ICreateService {
  execute(data: UserClass): Promise<UserClass>;
}
