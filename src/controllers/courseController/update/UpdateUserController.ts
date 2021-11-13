import { Request, Response } from "express";

import { UpdateService } from "../../../services/courseServices/update/UpdateUserService";
import { validationResult } from "express-validator";

import { Course } from "../../../entities/Course";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id, name, category, certificated, description, user, image } =
      req.body;

    const course = new Course(
      {
        name,
        category,
        certificated,
        description,
        user,
        image,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(course);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
