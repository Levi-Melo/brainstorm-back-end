import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export interface IActiveService {
  execute(id: string): Promise<ComplementaryAnswer>;
}
