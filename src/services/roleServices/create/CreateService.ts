import { getCustomRepository } from "typeorm";

import { Role } from "../../../entities/Role";
import { RoleRepository } from "../../../repositories/RoleRepository";

export class CreateService {
  async execute(data: Role) {
    const roleRepository = getCustomRepository(RoleRepository);

    const role = roleRepository.create(data);

    await roleRepository.save(role);

    return role;
  }
}
