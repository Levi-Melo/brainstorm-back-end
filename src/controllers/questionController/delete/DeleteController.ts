import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Fail } from "../../../entities/Error";

import { DeleteService } from "../../../services/questionServices/delete/DeleteService";
import { IDeleteController } from "./IDeleteController";

class DeleteController implements IDeleteController {
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
    const deleteService = new DeleteService();

    const response = await deleteService.execute(id);

    if (!response)
      throw new Fail(404, `Couldn't find an question with id '${id}'`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}

export { DeleteController };
