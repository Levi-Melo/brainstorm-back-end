import { Request, Response } from "express";

export interface IUpdateController {
  handle(req: Request, res: Response): Promise<Response>;
}
