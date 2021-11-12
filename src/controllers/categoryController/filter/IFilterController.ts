import { Request, Response } from "express";

export interface IFilterController {
  handle(req: Request, res: Response): Promise<Response>;
}
