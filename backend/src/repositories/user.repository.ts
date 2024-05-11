import { Request, Response } from "express";
import { EntityRepository, Repository } from "typeorm";
import bcrypt from "bcrypt";
import { UserEntity } from "../entities/user.entity";
import { sendErrorResponse, sendSuccessResponse } from "../utils/ customError";

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

      // Password validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        return sendErrorResponse(
          res,
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit",
          400
        );
      }

      // Check if user with this email already exists
      const existingUser = await this.findOne({ where: { email } });

      // If user doesn't exist, create a new user
      if (!existingUser) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = this.create({
          email,
          password: hashedPassword,
        });

        // Save the new user
        await this.save(newUser);

        return sendSuccessResponse(res, newUser);
      } else {
        // If user exists, validate the password
        const isMatched = await bcrypt.compare(
          password,
          existingUser.password!
        );

        if (!isMatched) {
          return sendErrorResponse(res, "Wrong credentials", 401);
        }

        return sendSuccessResponse(res, existingUser);
      }
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
}
