import { Router } from "express";
import { controllers } from "../controllers/courseController";

const router = Router();

router.post("/", controllers.createController);

router.get("/:id", controllers.getByIdController);

router.post("/:id", controllers.activeController);

router.get("/", controllers.filterController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as CourseRoutes };
