import { Request, Response } from "express";

import { Category } from "../../../entities/Category";
import { CreateService } from "../../../services/categoryServices/create/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { name, initials } = req.body;

    const category = new Category({
      name,
      initials,
    });

    const createService = new CreateService();

    const response = await createService.execute(category);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
