import { Request, Response } from "express";
import { Fail } from "../../../entities/Error";
import { FilterUserService } from "../../../services/userServices/filter/FilterUserService";

class FilterUserController {
  async handle(req: Request, res: Response) {
    const { name, cpf, email, rg, active, type } = req.query;
    const filterUserService = new FilterUserService();

    const response = await filterUserService.execute({
      name,
      cpf,
      email,
      rg,
      active,
      type,
    });

    if (response.length == 0)
      throw new Fail(404, "Couldn't find an User with these params");

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}

export { FilterUserController };
