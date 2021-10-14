import { Router } from "express";
import { UsersRoutes } from "./routes/UsersRoutes";

const router = Router();

router.use("/users", UsersRoutes);

export { router };
