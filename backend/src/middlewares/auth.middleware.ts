import { Response, NextFunction } from "express";
import { sendErrorResponse } from "../utils/customError";
import { CustomRequest } from "../express.types";
import { verifyToken } from "../utils/services/auth.service";

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return sendErrorResponse(res, "No token provided", 401);
  }

  const bearer = authHeader.split(" ")[0];
  const token = authHeader.split(" ")[1];

  if (bearer !== "Bearer") {
    return sendErrorResponse(res, "Invalid token format", 401);
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return sendErrorResponse(res, "Invalid token", 401);
  }
};
