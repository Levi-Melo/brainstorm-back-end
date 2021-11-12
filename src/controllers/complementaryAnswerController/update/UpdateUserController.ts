import { Request, Response } from "express";

import { UpdateService } from "../../../services/complementaryAnswerServices/update/UpdateService";
import { validationResult } from "express-validator";

import { ComplementaryAnswer } from "../../../entities/ComplementaryAnswer";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id, answer, text, user } = req.body;
    const complementaryAnswer = new ComplementaryAnswer(
      {
        answer,
        text,
        user,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(complementaryAnswer);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
