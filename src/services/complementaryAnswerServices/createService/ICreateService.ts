import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export interface ICreateService {
  execute(data: ComplementaryAnswer): Promise<ComplementaryAnswer>;
}
