import { Request, Response } from "express";

import { Role } from "../../../entities/Role";
import { CreateService } from "../../../services/roleServices/create/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { name, initials } = req.body;

    const role = new Role({
      name,
      initials,
    });

    const createService = new CreateService();

    const response = await createService.execute(role);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
