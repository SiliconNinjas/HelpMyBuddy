import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { CustomRequest } from "../express.types";

const router = express.Router();

router.post("/login", UserController.createNewAccountUsingPhone);
router.post("/test", authMiddleware, (req: CustomRequest, res: Response) => {
  // Get tasks logic
  res.send(req.user); // You can access the `user` property now
});

export default router;
