import { Teacher } from "../../../entities/Teacher";

export interface IActiveService {
  execute(id: string): Promise<Teacher>;
}
