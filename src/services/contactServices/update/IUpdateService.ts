import { Contact } from "../../../entities/Contact";

export interface IUpdateService {
  execute(data: Contact): Promise<Contact>;
}
