import { getCustomRepository } from "typeorm";

import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { IGetAllService } from "./IGetAllService";

export class GetAllService implements IGetAllService {
  async execute() {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.find();
    return category;
  }
}
