import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  const file = path.join(__dirname, "..", "doc", "doc.html");
  res.sendFile(file);
});

router.get("/specification", (req, res) => {
  //swagger.ignore: true
  res.sendFile(path.join(__dirname, "..", "doc", "docSpecification.json"));
});

export { router as DocRoutes };
