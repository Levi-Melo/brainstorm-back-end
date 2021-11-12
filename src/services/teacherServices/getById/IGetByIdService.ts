import { Teacher } from "../../../entities/Teacher";

export interface IGetByIdService {
  execute(id: string): Promise<Teacher>;
}
