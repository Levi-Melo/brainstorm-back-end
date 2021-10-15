import { Request, Response } from "express";

export interface IConfirmAccountController {
  handle(req: Request, res: Response): Promise<Response>;
}
