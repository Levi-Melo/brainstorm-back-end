import { Request, Response } from "express";
import { Fail } from "../../../entities/Error";
import { FilterService } from "../../../services/questionServices/filter/FilerService";

class FilterController {
  async handle(req: Request, res: Response) {
    const { text } = req.query;
    const filterService = new FilterService();

    const response = await filterService.execute({
      text: String(text),
    });

    if (response.length == 0)
      throw new Fail(404, "Couldn't find an  with these params");

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}

export { FilterController };
