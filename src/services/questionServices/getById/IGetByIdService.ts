import { Question } from "../../../entities/Question";

export interface IGetByIdService {
  execute(id: string): Promise<Question>;
}
