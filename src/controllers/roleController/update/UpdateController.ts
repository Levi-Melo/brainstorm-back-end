import { Request, Response } from "express";

import { UpdateService } from "../../../services/roleServices/update/UpdateService";
import { validationResult } from "express-validator";

import { Role } from "../../../entities/Role";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id, name, initials } = req.body;

    const role = new Role(
      {
        name,
        initials,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(role);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
