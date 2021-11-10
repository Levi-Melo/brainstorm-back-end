import { Request, Response } from "express";

import { IGetByIdController } from "./IGetByIdController";
import { GetByIdService } from "../../../services/classServices/getById/GetByIdService";
import { param, validationResult } from "express-validator";
import { Fail } from "../../../entities/Error";

export class GetByIdController implements IGetByIdController {
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

    const getById = new GetByIdService();

    const response = await getById.execute(id);
    if (!response) throw new Fail(404, `Couldn't find a class with id ${id}`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
