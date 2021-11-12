import { Request, Response } from "express";

import { UpdateService } from "../../../services/answerServices/update/UpdateService";
import { validationResult } from "express-validator";

import { Answer } from "../../../entities/Answer";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { text, user, question, id } = req.body;
    const answer = new Answer(
      {
        text,
        user,
        question,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(answer);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
