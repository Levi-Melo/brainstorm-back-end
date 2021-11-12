import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export interface IGetByIdService {
  execute(id: string): Promise<ComplementaryAnswer>;
}
