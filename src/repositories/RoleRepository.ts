import { EntityRepository, Repository } from "typeorm";
import { Role } from "../entities/Role";

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
