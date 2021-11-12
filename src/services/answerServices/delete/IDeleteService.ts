import { Answer } from "../../../entities/Answer";

export interface IDeleteService {
  execute(id: string): Promise<Answer>;
}
