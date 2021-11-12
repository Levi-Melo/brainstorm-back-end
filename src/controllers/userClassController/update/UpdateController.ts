import { Request, Response } from "express";

import { UpdateService } from "../../../services/userClassServices/update/UpdateService";
import { validationResult } from "express-validator";

import { UserClass } from "../../../entities/UserClass";

export class UpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { classId, user, id } = req.body;

    const userClass = new UserClass(
      {
        class: classId,
        user,
      },
      id
    );

    const updateService = new UpdateService();
    const response = await updateService.execute(userClass);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
