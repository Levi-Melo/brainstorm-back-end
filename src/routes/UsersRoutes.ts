import { Router } from "express";

const router = Router();

router.post("/");

router.get("/:id");

router.get("/");

router.post("/:id");

router.patch("/");

router.delete("/:id");

export { router as UsersRoutes };
