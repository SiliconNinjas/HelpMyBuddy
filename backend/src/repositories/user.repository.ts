import { Request, Response } from "express";
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { sendErrorResponse, sendSuccessResponse } from "../utils/customError";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/services/auth.service";
import { CustomRequest } from "../express.types";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async loginOrSignup(req: Request, res: Response) {
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
  // Function to update user information
  async updateUserInfo(req: CustomRequest, res: Response) {
    try {
      const { userId } = req.user; // Assuming userId is available in the request

      // Valid fields for updating user information
      const validFields = [
        "fullName",
        "profileImageUrl",
        "email",
        "gender",
        "dateOfBirth",
        "phoneNumber",
        "geoLocation",
        "address",
        "adharUrl",
        "upiId",
        "skills",
        "skillDescription",
        "totalEarnings",
      ];

      const fieldToUpdate = req.body;
      const fieldKey = Object.keys(fieldToUpdate)[0];

      // Validate if the field to update is valid
      if (!validFields.includes(fieldKey)) {
        return sendErrorResponse(res, "Invalid field to update", 400);
      }

      // Update user information
      await this.update({ userId }, fieldToUpdate);

      // Fetch user data before updating isEligible
      const user = await this.findOne({ userId });

      // Check if user is not undefined
      if (!user) {
        return sendErrorResponse(res, "User not found", 404);
      }

      // Check if all user information fields are not null or not empty
      const allFieldsFilled = validFields.every((field) => {
        return (
          user[field as keyof UserEntity] !== null &&
          user[field as keyof UserEntity] !== ""
        );
      });

      // Update isEligible based on allFieldsFilled
      await this.update({ userId }, { isEligible: allFieldsFilled });

      // Fetch updated user data
      const updatedUser = await this.findOne({ userId });

      return sendSuccessResponse(res, updatedUser);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }

  async getUserInfo(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      // Find the user by userId
      const user = await this.findOne(userId);

      if (!user) {
        return sendErrorResponse(res, "User not found", 404);
      }

      // Return user information
      return sendSuccessResponse(res, user);
    } catch (error) {
      console.error(error);
      return sendErrorResponse(res, "Internal server error", 500);
    }
  }
}
