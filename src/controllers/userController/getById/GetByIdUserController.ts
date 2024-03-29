import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { GetByIdUserService } from "../../../services/userServices/getById/GetByIdUserService";

import { Fail } from "../../../entities/Error";

class GetByIdUserController {
  async handle(req: Request, res: Response) {
    const id = req.body.userId;

    const getUserService = new GetByIdUserService();
    const response = await getUserService.execute(id);

    if (!response) throw new Fail(404, `Couldn't find an User with id ${id}`);

    return res.status(200).json({
      status: true,
      data: classToPlain(response),
    });
  }
}

export { GetByIdUserController };
