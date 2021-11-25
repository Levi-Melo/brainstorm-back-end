import { classToPlain } from "class-transformer";
import { Request, Response } from "express";

import { Question } from "../../../entities/Question";

import { UpdateService } from "../../../services/questionServices/update/UpdateService";

import { IUpdateController } from "./IUpdateController";

class UpdateController implements IUpdateController {
  async handle(req: Request, res: Response) {
    const { id, userId, classId, text } = req.body;

    const question = new Question(
      {
        text,
        class: classId,
        user: userId,
      },
      id
    );

    const updateService = new UpdateService();

    const response = await updateService.execute(question);

    return res.status(200).json({
      status: true,
      data: classToPlain(response),
    });
  }
}

export { UpdateController };
