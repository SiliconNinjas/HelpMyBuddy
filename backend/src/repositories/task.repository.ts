import { Request, Response } from "express";
import { EntityRepository, In, Repository } from "typeorm";
import { TaskEntity, TaskStatus } from "../entities/task.entity";
import { UserEntity } from "../entities/user.entity";
import { sendErrorResponse, sendSuccessResponse } from "../utils/customError";
import { CustomRequest } from "../express.types";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  // Create a new task
  async createTask(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user;
      const {
        taskTitle,
        taskDescription,
        taskGeoLocation,
        taskAddress,
        taskPrice,
      } = req.body;

      // Find the task owner (UserEntity)
      const taskOwner = await UserEntity.findOne({ where: { userId } });

      if (!taskOwner) {
        return sendErrorResponse(res, "Task owner not found", 404);
      }

      // Create a new task entity
      const newTask = this.create({
        taskTitle,
        taskDescription,
        taskGeoLocation,
        taskAddress,
        taskPrice,
        taskOwner,
      });

      // Save the new task
      await this.save(newTask);

      return sendSuccessResponse(res, newTask);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  // Update an existing task
  async updateTask(req: CustomRequest, res: Response) {
    try {
      const { taskId } = req.params;
      const {
        taskTitle,
        taskDescription,
        taskGeoLocation,
        taskAddress,
        taskPrice,
      } = req.body;

      // Find the task to update
      const task = await this.findOne({ where: { taskId } });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      // Update the task fields
      task.taskTitle = taskTitle || task.taskTitle;
      task.taskDescription = taskDescription || task.taskDescription;
      task.taskGeoLocation = taskGeoLocation || task.taskGeoLocation;
      task.taskAddress = taskAddress || task.taskAddress;
      task.taskPrice = taskPrice || task.taskPrice;

      // Save the updated task
      await this.save(task);

      return sendSuccessResponse(res, task);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  // Delete an existing task
  async deleteTask(req: CustomRequest, res: Response) {
    try {
      const { taskId } = req.params;

      // Find the task to delete
      const task = await this.findOne({ where: { taskId } });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      // Delete the task
      await this.remove(task);

      return sendSuccessResponse(res, "Task deleted successfully");
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
  // Fetch a task by taskId
  async getTaskById(req: Request, res: Response) {
    try {
      const { taskId } = req.params;

      // Find the task by taskId
      const task = await this.findOne({
        where: { taskId },
        relations: ["taskOwner"],
      });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      return sendSuccessResponse(res, task);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  // Fetch all tasks uploaded by a user with an optional limit
  async getUserTasks(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user;
      const limit = req.query.limit
        ? parseInt(req.query.limit as string)
        : undefined;

      // Find the user by userId
      const user = await UserEntity.findOne({ where: { userId } });

      if (!user) {
        return sendErrorResponse(res, "User not found", 404);
      }

      // Fetch tasks uploaded by the user with an optional limit
      const tasks = await this.find({
        where: { taskOwner: user },
        relations: ["taskOwner"],
        take: limit,
      });

      return sendSuccessResponse(res, tasks);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  // Fetch all tasks excluding expired tasks and tasks added by the current user with pagination
  async getAllTasks(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10; // Default limit is 10
      const page = req.query.page ? parseInt(req.query.page as string) : 1; // Default page is 1

      // Calculate offset based on pagination
      const offset = (page - 1) * limit;

      // Find the current user
      const currentUser = await UserEntity.findOne(userId, {
        relations: ["tasks"],
      });

      if (!currentUser) {
        return sendErrorResponse(res, "User not found", 404);
      }

      // Extract skills of the current user
      const userSkills = currentUser.skills || [];

      // Fetch tasks excluding expired tasks and tasks added by the current user
      const tasks = await this.createQueryBuilder("task")
        .leftJoinAndSelect("task.taskOwner", "owner")
        .where("task.expiryTime > :currentDate", { currentDate: new Date() })
        .andWhere("owner.userId != :userId", { userId })
        .orderBy("task.createdAt", "DESC")
        .skip(offset)
        .take(limit)
        .getMany();

      // Prioritize tasks based on matching keywords with user skills
      const prioritizedTasks = tasks.map((task) => {
        const matchingKeywords = task.taskKeywords?.filter((keyword) =>
          userSkills.includes(keyword)
        );
        return {
          ...task,
          matchingKeywords: matchingKeywords || [],
          priority: matchingKeywords?.length || 0,
        };
      });

      return sendSuccessResponse(res, prioritizedTasks);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  // Provide help for a task
  async provideHelp(req: CustomRequest, res: Response) {
    try {
      const { taskId } = req.params;
      const { userId } = req.user;

      // Find the task by taskId
      const task = await this.findOne({
        where: { taskId },
        relations: ["taskOwner"],
      });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      // Find the user providing help
      const helper = await UserEntity.findOne({ where: { userId } });

      if (!helper) {
        return sendErrorResponse(res, "Helper not found", 404);
      }

      // Generate OTP (6 digits)
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      // Assign the helper and OTP to the task
      task.helper = helper;
      task.otp = otp;

      // Save the updated task with the assigned helper and OTP
      await this.save(task);

      // Return OTP to the user (optional)
      return sendSuccessResponse(res, "Task Started..");
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  async confirmStartOTP(req: CustomRequest, res: Response) {
    try {
      const { taskId, otp } = req.body;

      // Find the task by taskId
      const task = await this.findOne({ where: { taskId } });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      // Check if OTP matches
      if (task.otp !== otp) {
        return sendErrorResponse(res, "Invalid OTP", 400);
      }

      // Generate OTP (6 digits)
      const Genotp = Math.floor(100000 + Math.random() * 900000).toString();

      // Update task status to "started"
      task.taskStatus = TaskStatus.STARTED;
      task.otp = Genotp;

      // Save the updated task
      await this.save(task);

      return sendSuccessResponse(res, "Task started successfully");
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
  async confirmEndOTP(req: CustomRequest, res: Response) {
    try {
      const { taskId, otp } = req.body;

      // Find the task by taskId
      const task = await this.findOne({ where: { taskId } });

      if (!task) {
        return sendErrorResponse(res, "Task not found", 404);
      }

      // Check if OTP matches
      if (task.otp !== otp) {
        return sendErrorResponse(res, "Invalid OTP", 400);
      }

      // Update task status to "started"
      task.taskStatus = TaskStatus.ENDED;
      task.otp = null; // Clear OTP after confirmation

      // Save the updated task
      await this.save(task);

      return sendSuccessResponse(res, "Task Ended successfully");
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
  async fetchDoingTask(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user;

      // Find the tasks where the helper id is equal to the current user id
      const tasks = await this.find({
        where: {
          helper: userId,
          taskStatus: In([
            TaskStatus.PENDING,
            TaskStatus.ACCEPTED,
            TaskStatus.STARTED,
          ]),
        },
        relations: ["taskOwner"],
      });

      return sendSuccessResponse(res, tasks);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  async fetchPostedTask(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user;

      // Find the tasks where the owner id is equal to the current user id
      const tasks = await this.find({
        where: {
          taskOwner: userId,
          taskStatus: In([
            TaskStatus.PENDING,
            TaskStatus.ACCEPTED,
            TaskStatus.STARTED,
          ]),
        },
        relations: ["helper"],
      });

      return sendSuccessResponse(res, tasks);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
}
