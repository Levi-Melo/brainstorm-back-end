import { Role } from "../../../entities/Role";

export interface ICreateService {
  execute(data: Role): Promise<Role>;
}
