import { Role } from "../../../entities/Role";

export interface IUpdateService {
  execute(data: Role): Promise<Role>;
}
