import { Answer } from "../../../entities/Answer";

export interface IGetByIdService {
  execute(id: string): Promise<Answer>;
}
