import { Router } from "express";
import { controllers } from "../controllers/courseController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.get("/", controllers.filterController);

router.get("/:id", controllers.getByIdController);

router.use(ensureAuthenticated);

router.post("/", controllers.createController);

router.post("/:id", controllers.activeController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as CourseRoutes };
