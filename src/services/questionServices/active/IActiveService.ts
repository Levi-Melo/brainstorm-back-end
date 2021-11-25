import { Question } from "../../../entities/Question";

export interface IActiveService {
  execute(id: string): Promise<Question>;
}
