import { Request, Response } from "express";

export interface IUpdateController {
  handle(req, res): Promise<Response>;
}
