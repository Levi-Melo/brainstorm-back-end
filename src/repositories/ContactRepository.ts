import { EntityRepository, Repository } from "typeorm";
import { Contact } from "../entities/Contact";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {}
