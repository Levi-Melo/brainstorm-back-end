import { Request, Response } from "express";

export interface IDeleteController {
  handle(req: Request, res: Response): Promise<Response>;
}
