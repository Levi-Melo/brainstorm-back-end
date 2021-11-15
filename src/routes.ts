import { Router } from "express";
import { routes } from "./routes/index";

const router = Router();

router.use("/users", routes.UsersRoutes);
router.use("/answers", routes.AnswerRoutes);
router.use("/classes", routes.ClassRoutes);
router.use("/complementaryAnswers", routes.ComplementaryAnswerRoutes);
router.use("/courses", routes.CourseRoutes);
router.use("/teachers", routes.TeacherRoutes);
router.use("/usersClasses", routes.UserClassRoutes);
router.use("/categories", routes.categoryRoutes);
router.use("/contacts", routes.contactRoutes);
router.use("/doc", routes.DocRoutes);

export { router };
