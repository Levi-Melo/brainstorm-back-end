import { RoleRepository } from "../../../repositories/RoleRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const roleRepository = getCustomRepository(RoleRepository);

    const roleExists = await roleRepository.findOne({ id });

    roleExists.active = true;
    return roleRepository.save({
      ...roleExists,
    });
  }
}
