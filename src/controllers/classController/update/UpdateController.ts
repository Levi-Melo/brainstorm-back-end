import { Request, Response } from "express";

import { IUpdateController } from "./IUpdateController";
import { UpdateService } from "../../../services/classServices/update/UpdateService";
import { validationResult } from "express-validator";

import { Fail } from "../../../entities/Error";
import { Class } from "../../../entities/Class";

export class UpdateController implements IUpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    const { description, link, name, id } = req.body;
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const lesson = new Class(
      {
        description,
        link,
        name,
      },
      id
    );

    const updateService = new UpdateService();

    const response = await updateService.execute(lesson);
    if (!response) throw new Fail(404, `Couldn't find a class with id ${id}`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
