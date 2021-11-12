import { Router } from "express";
import { controllers } from "../controllers/userClassController";

const router = Router();

router.post("/", controllers.createController);

router.get("/:id", controllers.getByIdController);

router.patch("/", controllers.updateController);

export { router as UserClassRoutes };
