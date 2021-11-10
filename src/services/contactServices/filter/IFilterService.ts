import { Contact } from "../../../entities/Contact";

type filterData = {
  contactName?: string;
  telephone?: string;
  cellphone?: string;
};

export interface IFilterService {
  execute(id: filterData): Promise<Contact[]>;
}
