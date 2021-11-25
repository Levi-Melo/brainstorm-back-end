import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { GetByIdService } from "../../../services/questionServices/getById/GetByIdService";

import { Fail } from "../../../entities/Error";

class GetByIdController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id } = req.params;

    const getService = new GetByIdService();
    const response = await getService.execute(id);

    if (!response)
      throw new Fail(404, `Couldn't find an question with id ${id}`);

    return res.status(200).json({
      status: true,
      data: classToPlain(response),
    });
  }
}

export { GetByIdController };
