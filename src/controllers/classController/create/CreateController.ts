import { Request, Response } from "express";

import { ICreateController } from "./ICreateController";
import { CreateService } from "../../../services/classServices/createService/CreateService";
import { validationResult } from "express-validator";

import { Class } from "../../../entities/Class";
import { Fail } from "../../../entities/Error";

export class CreateController implements ICreateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    const { description, link, name } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const lesson = new Class({
      description,
      link,
      name,
    });

    const createService = new CreateService();

    const response = await createService.execute(lesson);

    if (!response) throw new Fail(404, `Couldn't create an register of class`);

    return res.status(201).json({
      status: true,
      data: response,
    });
  }
}
