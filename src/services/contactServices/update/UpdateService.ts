import { ContactRepository } from "../../../repositories/ContactRepository";
import { getCustomRepository } from "typeorm";
import { IUpdateService } from "./IUpdateService";
import { Contact } from "../../../entities/Contact";

export class UpdateService implements IUpdateService {
  async execute(data: Contact) {
    const contactRepository = getCustomRepository(ContactRepository);

    return contactRepository.save({
      ...data,
    });
  }
}
