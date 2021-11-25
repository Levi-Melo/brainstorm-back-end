import { Router } from "express";
import { controllers } from "../controllers/userClassController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.use(ensureAuthenticated);

router.post("/", controllers.createController);

router.get("/", controllers.filterController);

router.patch("/", controllers.updateController);

export { router as UserClassRoutes };
