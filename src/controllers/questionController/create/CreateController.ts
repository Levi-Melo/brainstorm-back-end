import { Request, Response } from "express";

import { Question } from "../../../entities/Question";
import { ICreateController } from "./ICreateController";
import { CreateService } from "../../../services/questionServices/create/CreateService";

import { classToPlain } from "class-transformer";
import { hash } from "bcrypt";

export class CreateController implements ICreateController {
  async handle(req: Request, res: Response) {
    const { classId, text, userId } = req.body;

    const question = new Question({
      class: classId,
      text,
      user: userId,
    });

    const createService = new CreateService();

    const response = await createService.execute(question);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
