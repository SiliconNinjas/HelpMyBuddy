import { Response } from "express";
import HTTPStatus from "../enums/httpStatus";
import CustomError from "./customError";

interface SuccessResponse {
  status: boolean;
  data: any;
}

interface ErrorResponse {
  status: boolean;
  error: string;
}

export const sendSuccessResponse = (res: Response, data: any): void => {
  const successResponse: SuccessResponse = {
    status: true,
    data,
  };
  res.json(successResponse);
};

export const sendErrorResponse = (
  res: Response,
  error: ErrorResponse | any,
  status: number = HTTPStatus.INTERNAL_SERVER_ERROR
): void => {
  let errorResponse: ErrorResponse;

  if (error instanceof CustomError) {
    errorResponse = {
      status: false,
      error: error.message,
    };
    res.status(error.status).json(errorResponse);
  } else if (typeof error === "string") {
    errorResponse = {
      status: false,
      error,
    };
    res.status(status).json(errorResponse);
  } else {
    errorResponse = {
      status: false,
      error: "Validation Error",
    };
    res.status(status).json(errorResponse);
  }
};