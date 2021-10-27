import { getCustomRepository } from "typeorm";

import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne({
      id,
    });

    category.active = false;
    await categoryRepository.save(category);
    return category;
  }
}
