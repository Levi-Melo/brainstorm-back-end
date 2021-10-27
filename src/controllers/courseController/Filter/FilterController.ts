import { Request, Response } from "express";

import { FilterService } from "../../../services/courseServices/filter/FilterService";
import { param, validationResult } from "express-validator";

import { Fail } from "../../../entities/Error";
import { Like } from "typeorm";
import { removeNullFields } from "../../../utils/removeNullFields";

export class FilterController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const query = {
      name: req.query.name ? Like(String(req.query.name) + "%") : null,
      category: req.query.category ? String(req.query.category) : null,
      active: req.query.active
        ? req.query.active === "false"
          ? false
          : true
        : null,
      certificated: req.query.certificated
        ? req.query.certificated === "false"
          ? false
          : true
        : null,
      description: req.query.description
        ? Like(String(req.query.description) + "%")
        : null,
      user: req.query.user ? String(req.query.user) : null,
    };
    const getById = new FilterService();

    const response = await getById.execute(removeNullFields(query));
    if (!response)
      throw new Fail(404, `Couldn't find a course with this params`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}
