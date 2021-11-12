import { Teacher } from "../../../entities/Teacher";

export interface IDeleteService {
  execute(id: string): Promise<Teacher>;
}
