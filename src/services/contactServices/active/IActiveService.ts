import { Contact } from "../../../entities/Contact";

export interface IActiveService {
  execute(id: string): Promise<Contact>;
}
