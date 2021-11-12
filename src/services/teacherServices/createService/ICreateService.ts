import { Teacher } from "../../../entities/Teacher";

export interface ICreateService {
  execute(data: Teacher): Promise<Teacher>;
}
