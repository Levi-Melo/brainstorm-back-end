import { Role } from "../../../entities/Role";

export interface IDeleteService {
  execute(id: string): Promise<Role>;
}
