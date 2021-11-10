import { Request, Response } from "express";

import { IUpdateController } from "./IUpdateController";
import { UpdateService } from "../../../services/contactServices/update/UpdateService";
import { validationResult } from "express-validator";

import { Contact } from "../../../entities/Contact";
import { Fail } from "../../../entities/Error";

export class UpdateController implements IUpdateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    const { contactName, phoneNumber, userId, id, logInfo } = req.body;
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const contact = new Contact(
      {
        contactName,
        phoneNumber,
        user: userId,
      },
      id
    );

    const updateService = new UpdateService();

    const response = await updateService.execute(contact);
    if (!response) throw new Fail(404, `Couldn't find a Contact with id ${id}`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
