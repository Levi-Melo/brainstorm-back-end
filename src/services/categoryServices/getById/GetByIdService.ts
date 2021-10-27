import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { IGetByIdService } from "./IGetByIdService";

export class GetByIdService implements IGetByIdService {
  async execute(id: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const category = await categoryRepository.findOne({
      where: [{ id: id }],
    });

    return category;
  }
}
