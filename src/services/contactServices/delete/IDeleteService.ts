import { Contact } from "../../../entities/Contact";

export interface IDeleteService {
  execute(id: string): Promise<Contact>;
}
