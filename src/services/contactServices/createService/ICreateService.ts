import { Contact } from "../../../entities/Contact";

export interface ICreateService {
  execute(data: Contact): Promise<Contact>;
}
