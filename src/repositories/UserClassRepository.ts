import { EntityRepository, Repository } from "typeorm";
import { UserClass } from "../entities/UserClass";

@EntityRepository(UserClass)
export class UserClassRepository extends Repository<UserClass> {}
