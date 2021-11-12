import { Answer } from "../../../entities/Answer";

export interface IActiveService {
  execute(id: string): Promise<Answer>;
}
