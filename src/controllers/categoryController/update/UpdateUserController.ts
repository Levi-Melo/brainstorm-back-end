import { Request, Response } from "express";

import { UpdateService } from "../../../services/categoryServices/update/UpdateUserService";
import { validationResult } from "express-validator";

import { Category } from "../../../entities/Category";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id, name, initials, image } = req.body;

    const category = new Category(
      {
        name,
        initials,
        image,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(category);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
