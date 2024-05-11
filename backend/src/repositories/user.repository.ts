// user.repository.ts
import { Request, Response } from "express";
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { sendErrorResponse, sendSuccessResponse } from "../utils/customError";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/services/auth.service";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createNewAccountUsingEmail(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return sendErrorResponse(res, "Invalid email address", 400);
      }

      // Check if user with this email already exists
      const existingUser = await this.findOne({ where: { email } });

      // If user doesn't exist, create a new user
      if (!existingUser) {
        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create new user
        const newUser = this.create({
          email,
          password: hashedPassword,
        });

        // Save the new user
        await this.save(newUser);

        // Generate JWT token
        const token = generateToken({ userId: newUser.userId });

        return sendSuccessResponse(res, { user: newUser, token });
      } else {
        // If user exists, validate the password
        const isMatched = await comparePassword(
          password,
          existingUser.password!
        );

        if (!isMatched) {
          return sendErrorResponse(res, "Wrong credentials", 401);
        }

        // Generate JWT token
        const token = generateToken({ userId: existingUser.userId });

        return sendSuccessResponse(res, { user: existingUser, token });
      }
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
}
