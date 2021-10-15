import { Request, Response } from "express";

import { SignInUserService } from "../../../services/userServices/signIn/SignInUserService";
import { ISignInUserController } from "./ISignInUserController";

class SignInUserController implements ISignInUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const signInUserService = new SignInUserService();

    const token = await signInUserService.execute({ email, password });

    return res.status(200).json({
      code: 200,
      data: token,
    });
  }
}

export { SignInUserController };
