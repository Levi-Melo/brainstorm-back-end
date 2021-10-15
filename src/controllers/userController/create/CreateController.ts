import { Request, Response } from "express";

import { User } from "../../../entities/User";
import { ICreateController } from "./ICreateController";
import { CreateService } from "../../../services/userServices/create/CreateService";

import { classToPlain } from "class-transformer";
import { hash } from "bcrypt";

export class CreateController implements ICreateController {
  async handle(req: Request, res: Response) {
    const {
      id,
      name,
      cpf,
      rg,
      email,
      password,
      role,
      confirmationCode,
      confirmedAccount,
    } = req.body;

    const user = new User(
      {
        name,
        email,
        cpf,
        password: await hash(password, 10),
        rg,
        role,
      },
      id
    );

    const createService = new CreateService();

    const response = await createService.execute(user);
    if (!response) throw new Error();

    return res.status(201).json({
      status: true,
      data: classToPlain(response),
    });
  }
}
