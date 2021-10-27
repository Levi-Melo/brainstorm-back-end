import { getCustomRepository } from "typeorm";

import { RoleRepository } from "../../../repositories/RoleRepository";
import { IGetAllService } from "./IGetAllService";

export class GetAllService implements IGetAllService {
  async execute() {
    const roleRepository = getCustomRepository(RoleRepository);

    const role = await roleRepository.find();
    return role;
  }
}
