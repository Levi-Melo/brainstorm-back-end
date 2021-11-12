import { Answer } from "../../../entities/Answer";

export interface ICreateService {
  execute(data: Answer): Promise<Answer>;
}
