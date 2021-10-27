import { Role } from "../../../entities/Role";

export interface IGetAllService {
  execute(): Promise<Role[]>;
}
