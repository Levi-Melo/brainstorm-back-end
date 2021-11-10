import { ContactRepository } from "../../../repositories/ContactRepository";
import { getCustomRepository } from "typeorm";
import { Contact } from "../../../entities/Contact";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
  async execute(data: Contact) {
    const contactRepository = getCustomRepository(ContactRepository);

    const contact = contactRepository.create(data);

    await contactRepository.save(contact);
    return contact;
  }
}
