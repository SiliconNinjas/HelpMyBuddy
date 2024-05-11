import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { CustomRequest } from "../express.types";

const router = express.Router();

router.post("/loginOrSignup", UserController.loginOrSignup);

router.put("/updateUserInfo", authMiddleware, UserController.updateUserInfo);

export default router;
