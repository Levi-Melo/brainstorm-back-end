import { getCustomRepository } from "typeorm";

import { Category } from "../../../entities/Category";
import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
  async execute(data: Category) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = categoryRepository.create(data);

    await categoryRepository.save(category);

    return category;
  }
}
