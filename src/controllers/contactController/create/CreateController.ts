import { Request, Response } from "express";

import { ICreateController } from "./ICreateController";
import { CreateService } from "../../../services/contactServices/createService/CreateService";
import { validationResult } from "express-validator";

import { Contact } from "../../../entities/Contact";
import { Fail } from "../../../entities/Error";

export class CreateController implements ICreateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    const { contactName, phoneNumber, userId } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const contact = new Contact({
      contactName,
      phoneNumber,
      user: userId,
    });

    const createClientService = new CreateService();

    const response = await createClientService.execute(contact);

    if (!response)
      throw new Fail(404, `Couldn't create an register of contact`);

    return res.status(201).json({
      status: true,
      data: response,
    });
  }
}
