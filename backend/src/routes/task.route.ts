import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { TaskController } from "../controllers/task.controller";
import { createTaskValidatorMiddleware } from "../middlewares/createTask.validator.midleware";

const router = express.Router();

router.get("/", authMiddleware, TaskController.getAllTasks);

router.get("/getTaskById/:taskId", authMiddleware, TaskController.getTaskById);

router.get("/getUserTasks", authMiddleware, TaskController.getUserTasks);

router.get("/fetchDoingTask", authMiddleware, TaskController.fetchDoingTask);

router.get("/fetchPostedTask", authMiddleware, TaskController.fetchPostedTask);

router.post(
  "/askHelp",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.createTask
);

router.post("/provideHelp/:taskId", authMiddleware, TaskController.provideHelp);

router.post("/confirmStartOTP", authMiddleware, TaskController.confirmStartOTP);
router.post("/confirmEndOTP", authMiddleware, TaskController.confirmEndOTP);

router.put(
  "/updateTask/:taskId",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.updateTask
);

router.delete("/deleteTask/:taskId", authMiddleware, TaskController.deleteTask);

export default router;
