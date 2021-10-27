import { Role } from "../../../entities/Role";

export interface IActiveService {
  execute(id: string): Promise<Role>;
}
