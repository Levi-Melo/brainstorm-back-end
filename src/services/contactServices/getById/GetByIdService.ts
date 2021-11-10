import { getCustomRepository } from "typeorm";
import { ContactRepository } from "../../../repositories/ContactRepository";

import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const contactRepository = getCustomRepository(ContactRepository);

    return contactRepository.findOne({
      where: [{ id }],
      join: {
        alias: "contact",
        innerJoinAndSelect: {
          user: "contact.user",
        },
      },
    });
  }
}
