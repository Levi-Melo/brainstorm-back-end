import { Router } from "express";
import { controllers } from "../controllers/userClassController";

const router = Router();

router.post("/", controllers.createController);

router.get("/", controllers.filterController);

router.patch("/", controllers.updateController);

export { router as UserClassRoutes };
