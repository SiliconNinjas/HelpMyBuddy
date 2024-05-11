import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", UserController.createNewAccountUsingPhone);

export default router;
