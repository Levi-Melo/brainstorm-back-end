import { Request, Response } from "express";

import { Answer } from "../../../entities/Answer";
import { CreateService } from "../../../services/answerServices/createService/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { text, user, question } = req.body;

    const answer = new Answer({
      text,
      user,
      question,
    });

    const createService = new CreateService();

    const response = await createService.execute(answer);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
