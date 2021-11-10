import { IFilterService } from "./IFilterService";
import { ContactRepository } from "../../../repositories/ContactRepository";
import { getCustomRepository, Like } from "typeorm";

type filterData = {
  contactName?: string;
  phoneNumber?: string;
  user?: string;
};

export class FilterService implements IFilterService {
  async execute(data: filterData) {
    const contactRepository = getCustomRepository(ContactRepository);
    const results = await contactRepository.find({ where: data,
      join: {
        alias: "contact",
        innerJoinAndSelect: {
          user: "contact.user",
        }}});
    return results;
  }
}
