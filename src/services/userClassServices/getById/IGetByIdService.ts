import { UserClass } from "../../../entities/UserClass";

export interface IGetByIdService {
  execute(id: string): Promise<UserClass>;
}
