import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Fail } from "../../../entities/Error";
import { DeleteService } from "../../../services/contactServices/delete/DeleteService";
import { IDeleteController } from "./IDeleteController";

export class DeleteController implements IDeleteController {
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

    const deleteClientService = new DeleteService();

    const response = await deleteClientService.execute(id);
    if (!response)
      throw new Fail(
        404,
        `Não foi possível encontrar um contato com id: ${id}`
      );

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
