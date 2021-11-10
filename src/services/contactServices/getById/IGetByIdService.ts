import { Contact } from "../../../entities/Contact";

export interface IGetByIdService {
  execute(id: string): Promise<Contact>;
}
