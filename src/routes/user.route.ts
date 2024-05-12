import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { CustomRequest } from "../express.types";

const router = express.Router();

// Route to get user information
router.get("/getUserInfo", authMiddleware, UserController.getUserInfo);

// Route for user login or signup
router.post("/loginOrSignup", UserController.loginOrSignup);

// Route to update user information
router.put("/updateUserInfo", authMiddleware, UserController.updateUserInfo);

export default router;
