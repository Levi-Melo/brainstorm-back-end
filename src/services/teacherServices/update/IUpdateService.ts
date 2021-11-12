import { Teacher } from "../../../entities/Teacher";

export interface IUpdateService {
  execute(data: Teacher): Promise<Teacher>;
}
