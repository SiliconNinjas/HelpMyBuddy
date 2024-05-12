import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";

export class UserController {
  static async loginOrSignup(req: Request, res: Response) {
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.loginOrSignup(req, res);
  }

  static async updateUserInfo(req: Request, res: Response) {
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.updateUserInfo(req, res);
  }
}
