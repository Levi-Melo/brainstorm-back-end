import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { getCustomRepository } from "typeorm";
import { IActiveService } from "./IActiveService";

export class ActiveService implements IActiveService {
  async execute(id: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categoryExists = await categoryRepository.findOne({ id });

    categoryExists.active = true;
    return categoryRepository.save({
      ...categoryExists,
    });
  }
}
