import { Request, Response } from "express";

export interface IGetByIdController {
  handle(req: Request, res: Response): Promise<Response>;
}
