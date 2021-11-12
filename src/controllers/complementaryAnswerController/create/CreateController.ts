import { Request, Response } from "express";

import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";
import { CreateService } from "../../../services/complementaryAnswerServices/createService/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { answer, text, user } = req.body;

    const complementaryAnswer = new ComplementaryAnswer({
      answer,
      text,
      user,
    });

    const createService = new CreateService();

    const response = await createService.execute(complementaryAnswer);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
