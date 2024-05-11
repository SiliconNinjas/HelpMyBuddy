import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { TaskController } from "../controllers/task.controller";
import { createTaskValidatorMiddleware } from "../middlewares/createTask.validator.midleware";

const router = express.Router();

router.get("/", authMiddleware, TaskController.getAllTasks);

router.get("/:taskId", authMiddleware, TaskController.getTaskById);

router.get("/getUserTasks", authMiddleware, TaskController.getUserTasks);

router.post(
  "/askHelp",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.createTask
);

router.put(
  "/updateTask/:taskId",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.updateTask
);

router.delete("/deleteTask/:taskId", authMiddleware, TaskController.deleteTask);

export default router;
