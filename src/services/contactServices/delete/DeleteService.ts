import { ContactRepository } from "../../../repositories/ContactRepository";
import { getCustomRepository } from "typeorm";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const contactRepository = getCustomRepository(ContactRepository);

    const contact = await contactRepository.findOne({ id });

    contact.active = false;
    return contactRepository.save({
      ...contact,
    });
  }
}
