import { Request, Response } from "express";

import { UserClass } from "../../../entities/UserClass";
import { CreateService } from "../../../services/userClassServices/createService/CreateService";

import { classToPlain } from "class-transformer";

export class CreateController {
  async handle(req: Request, res: Response) {
    const { classId, user } = req.body;

    const userClass = new UserClass({
      class: classId,
      user,
    });

    const createService = new CreateService();

    const response = await createService.execute(userClass);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
