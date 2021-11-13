import { Request, Response } from "express";

import { Course } from "../../../entities/Course";
import { CreateService } from "../../../services/courseServices/create/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { name, category, certificated, description, user, image } = req.body;

    const course = new Course({
      name,
      category,
      certificated,
      description,
      user,
      image,
    });

    const createService = new CreateService();

    const response = await createService.execute(course);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
