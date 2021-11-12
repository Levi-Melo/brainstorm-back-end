import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export interface IUpdateService {
  execute(data: ComplementaryAnswer): Promise<ComplementaryAnswer>;
}
