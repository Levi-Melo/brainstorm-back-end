import { getCustomRepository } from "typeorm";
import { RoleRepository } from "../../../repositories/RoleRepository";
import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const roleRepository = getCustomRepository(RoleRepository);
    const role = await roleRepository.findOne({
      where: [{ id: id }],
    });

    return role;
  }
}
