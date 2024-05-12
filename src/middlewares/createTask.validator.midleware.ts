import { type Request, type Response, type NextFunction } from "express";
import { createTaskSchema } from "../validators/createTask.validator";
import { sendErrorResponse } from "../utils/customError";

// User Create Validation Middleware
export const createTaskValidatorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const { error } = createTaskSchema.validate(payload);
  if (error != null) {
    return sendErrorResponse(res, error.message);
  } else {
    next();
  }
};
