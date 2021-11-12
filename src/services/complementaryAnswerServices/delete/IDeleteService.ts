import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export interface IDeleteService {
  execute(id: string): Promise<ComplementaryAnswer>;
}
