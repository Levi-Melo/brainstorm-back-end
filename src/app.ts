import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import variables from "dotenv";
variables.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", router);

// app.use((error: Fail, req: Request, res: Response, next: NextFunction) => {
//   const resJson = {
//     status: false,
//     errors: error.message || "Internal Server Error",
//   };

//   const statusCode = error.status ? error.status : 500;

//   return res.status(statusCode).json(resJson);
// });

export { app };
