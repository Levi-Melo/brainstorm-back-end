import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Fail } from "../../../entities/Error";

import { ConfirmAccountService } from "../../../services/userServices/confirmAccount/ConfirmAccountService";
import { IConfirmAccountController } from "./IConfirmAccountController";

export class ConfirmAccountController implements IConfirmAccountController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id, confirmationCode } = req.body;
    const confirmAccountService = new ConfirmAccountService();

    const response = await confirmAccountService.execute(id, confirmationCode);

    if (!response) throw new Fail(404, `Couldn't find an User with id '${id}'`);

    return res.status(200).json({
      status: true,
      data: "Account confirmed: " + response.id,
    });
  }
}
