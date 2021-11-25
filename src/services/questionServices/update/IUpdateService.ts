import { Question } from "../../../entities/Question";

export interface IUpdateService {
  execute(data: Question): Promise<Question>;
}
