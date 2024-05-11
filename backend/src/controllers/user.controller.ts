import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";

export class UserController {
  static async createNewAccountUsingPhone(req: Request, res: Response) {
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.createNewAccountUsingEmail(req, res);
  }
}
