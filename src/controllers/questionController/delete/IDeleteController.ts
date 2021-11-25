import { Request, Response } from "express";

export interface IDeleteController {
  handle(req, res): Promise<Response>;
}
