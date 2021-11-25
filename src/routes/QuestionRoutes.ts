import { Router } from "express";
import { controllers } from "../controllers/questionController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.use(ensureAuthenticated);

router.post("/", controllers.createController);

router.get("/", controllers.filterController);

router.get("/:id", controllers.getByIdController);

router.post("/:id", controllers.activeController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as QuestionRoutes };
