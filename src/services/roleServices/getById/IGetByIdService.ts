import { Role } from "../../../entities/Role";

export interface IGetByIdService {
  execute(id: string): Promise<Role>;
}
