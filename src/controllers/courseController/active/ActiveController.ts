import { Request, Response } from "express";
import { param, validationResult } from "express-validator";

import { ActiveService } from "../../../services/courseServices/active/ActiveService";
import { Fail } from "../../../entities/Error";

export class ActiveController {
  async handle(req: Request, res: Response) {
    param("id").isUUID();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id } = req.params;

    const activeCourse = new ActiveService();

    const response = await activeCourse.execute(id);
    if (!response) throw new Fail(404, `Couldn't find an course with id ${id}`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
