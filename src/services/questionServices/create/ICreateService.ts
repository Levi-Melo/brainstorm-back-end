import { Question } from "../../../entities/Question";

export interface ICreateService {
  execute(data: Question): Promise<Question>;
}
