import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/task.repository";
import { Request, Response } from "express";

export class TaskController {
  static async createTask(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.createTask(req, res);
  }

  static async updateTask(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.updateTask(req, res);
  }

  static async deleteTask(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.deleteTask(req, res);
  }

  static async getTaskById(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.getTaskById(req, res);
  }

  static async getUserTasks(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.getUserTasks(req, res);
  }

  static async getAllTasks(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.getAllTasks(req, res);
  }

  static async provideHelp(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.provideHelp(req, res);
  }

  static async confirmStartOTP(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.confirmStartOTP(req, res);
  }

  static async confirmEndOTP(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.confirmEndOTP(req, res);
  }

  static async fetchDoingTask(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.fetchDoingTask(req, res);
  }

  static async fetchPostedTask(req: Request, res: Response) {
    const taskRepository = getCustomRepository(TaskRepository);
    await taskRepository.fetchPostedTask(req, res);
  }
}
