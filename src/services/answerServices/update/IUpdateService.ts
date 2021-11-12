import { Answer } from "../../../entities/Answer";

export interface IUpdateService {
  execute(data: Answer): Promise<Answer>;
}
