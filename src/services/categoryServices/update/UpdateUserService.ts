import { getCustomRepository } from "typeorm";

import { Category } from "../../../entities/Category";
import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { IUpdateService } from "./IUpdateUserService";

export class UpdateService implements IUpdateService {
  async execute(data: Category) {
    const categoryRepository = getCustomRepository(CategoryRepository);
    return categoryRepository.save({
      ...data,
    });
  }
}
