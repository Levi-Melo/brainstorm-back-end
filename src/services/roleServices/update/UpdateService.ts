import { getCustomRepository } from "typeorm";

import { Role } from "../../../entities/Role";
import { RoleRepository } from "../../../repositories/RoleRepository";
import { IUpdateService } from "./IUpdateService";

export class UpdateService implements IUpdateService {
  async execute(data: Role) {
    const roleRepository = getCustomRepository(RoleRepository);
    return roleRepository.save({
      ...data,
    });
  }
}
