import { getCustomRepository } from "typeorm";

import { RoleRepository } from "../../../repositories/RoleRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const roleRepository = getCustomRepository(RoleRepository);

    const role = await roleRepository.findOne({
      id,
    });

    role.active = false;
    await roleRepository.save(role);
    return role;
  }
}
