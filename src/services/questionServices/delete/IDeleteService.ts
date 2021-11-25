import { Question } from "../../../entities/Question";

export interface IDeleteService {
  execute(id: string): Promise<Question>;
}
