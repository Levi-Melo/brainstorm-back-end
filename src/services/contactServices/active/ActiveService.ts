import { ContactRepository } from "../../../repositories/ContactRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const contactRepository = getCustomRepository(ContactRepository);

    const contactExists = await contactRepository.findOne({ id });

    contactExists.active = true;
    return contactRepository.save({
      ...contactExists,
    });
  }
}
