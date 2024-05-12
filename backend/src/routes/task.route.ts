import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { TaskController } from "../controllers/task.controller";
import { createTaskValidatorMiddleware } from "../middlewares/createTask.validator.midleware";

const router = express.Router();

// Route to fetch all tasks
router.get("/", authMiddleware, TaskController.getAllTasks);

// Route to fetch a task by its ID
router.get("/getTaskById/:taskId", authMiddleware, TaskController.getTaskById);

// Route to fetch tasks uploaded by a user
router.get("/getUserTasks", authMiddleware, TaskController.getUserTasks);

// Route to fetch tasks currently being done by the user
router.get("/fetchDoingTask", authMiddleware, TaskController.fetchDoingTask);

// Route to fetch tasks posted by the user
router.get("/fetchPostedTask", authMiddleware, TaskController.fetchPostedTask);

// Route to create a new task
router.post(
  "/askHelp",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.createTask
);

// Route to provide help for a task
router.post("/provideHelp/:taskId", authMiddleware, TaskController.provideHelp);

// Route to confirm OTP and start a task
router.post("/confirmStartOTP", authMiddleware, TaskController.confirmStartOTP);

// Route to confirm OTP and end a task
router.post("/confirmEndOTP", authMiddleware, TaskController.confirmEndOTP);

// Route to update an existing task
router.put(
  "/updateTask/:taskId",
  authMiddleware,
  createTaskValidatorMiddleware,
  TaskController.updateTask
);

// Route to delete a task
router.delete("/deleteTask/:taskId", authMiddleware, TaskController.deleteTask);

export default router;
