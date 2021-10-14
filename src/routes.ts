import { Router, Request } from "express";

const router = Router();

router.get("/a", (req, res) => {
  res.send("aaaaaaaaaaaaa");
});

// router.use((req: Request, res: Response, next: NextFunction) => {
//   next(new Error("Route not found"));
// });

export { router };
