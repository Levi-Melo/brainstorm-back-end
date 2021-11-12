import { Request, Response } from "express";

import { Teacher } from "../../../entities/Teacher";
import { CreateService } from "../../../services/teacherServices/createService/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { name, user, bio } = req.body;

    const teacher = new Teacher({
      name,
      user,
      bio,
    });

    const createService = new CreateService();

    const response = await createService.execute(teacher);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
