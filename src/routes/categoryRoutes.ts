import { Router } from "express";
import { controllers } from "../controllers/categoryController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.get("/:id", controllers.getByIdController);

router.get("/", controllers.filterController);

router.use(ensureAuthenticated);

router.post("/", controllers.createController);

router.post("/:id", controllers.activeController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as categoryRoutes };
