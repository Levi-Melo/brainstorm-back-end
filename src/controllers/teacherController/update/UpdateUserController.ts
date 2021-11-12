import { Request, Response } from "express";

import { UpdateService } from "../../../services/teacherServices/update/UpdateService";
import { validationResult } from "express-validator";

import { Teacher } from "../../../entities/Teacher";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { name, user, bio, id } = req.body;
    const teacher = new Teacher(
      {
        name,
        user,
        bio,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(teacher);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
