import { classToPlain } from "class-transformer";
import { Request, Response } from "express";

import { User } from "../../../entities/User";

import { UpdateUserService } from "../../../services/userServices/update/UpdateUserService";

import { IUpdateUserController } from "./IUpdateUserController";

class UpdateUserController implements IUpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, name, cpf, rg, email, password, type } = req.body;

    const user = new User(
      {
        name,
        email,
        cpf,
        password,
        rg,
        type,
      },
      id
    );

    const updateUserService = new UpdateUserService();

    const response = await updateUserService.execute(user);

    return res.status(200).json({
      status: true,
      data: classToPlain(response),
    });
  }
}

export { UpdateUserController };
