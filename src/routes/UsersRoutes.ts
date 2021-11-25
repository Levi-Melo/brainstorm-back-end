import { Router } from "express";
import { controllers } from "../controllers/userController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.post("/signIn", controllers.signInController);

router.post("/", controllers.createController);

router.use(ensureAuthenticated);

router.get("/:id", controllers.getByIdController);

router.post("/:id", controllers.activeController);

router.get("/", controllers.filterController);

router.patch("/", controllers.updateController);

router.delete("/:id", controllers.deleteController);

export { router as UsersRoutes };
