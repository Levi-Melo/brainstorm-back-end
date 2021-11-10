import { Request, Response } from "express";
import { Like } from "typeorm";

import { IFilterController } from "./IFilterController";
import { FilterService } from "../../../services/contactServices/filter/FilerService";
import { removeNullFields } from "../../../utils/removeNullFields";
import { Fail } from "../../../entities/Error";

export class FilterController implements IFilterController {
  async handle(req: Request, res: Response) {
    const query = {
      contactName: req.query.contactName
        ? Like(String(req.query.contactName) + "%")
        : null,
      phoneNumber: req.query.phoneNumber ? String(req.query.phoneNumber) : null,
      user: req.query.user ? String(req.query.user) : null,
    };

    const { logInfo } = req.body;

    const filter = new FilterService();

    const response = await filter.execute(removeNullFields(query));
    if (response.length === 0)
      throw new Fail(404, `Couldn't find an contact with these params`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
