import Joi from "joi";

export const createTaskSchema = Joi.object({
  taskTitle: Joi.string().required().max(255).messages({
    "string.base": "Task title must be a string",
    "string.empty": "Task title is required",
    "string.max": "Task title must not exceed 255 characters",
  }),

  taskDescription: Joi.string().required().max(255).messages({
    "string.base": "Task description must be a string",
    "string.empty": "Task description is required",
    "string.max": "Task description must not exceed 255 characters",
  }),

  taskGeoLocation: Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required(),
  }).allow(null),

  taskAddress: Joi.string().required().max(255).messages({
    "string.base": "Task address must be a string",
    "string.empty": "Task address is required",
    "string.max": "Task address must not exceed 255 characters",
  }),

  taskKeywords: Joi.array().items(Joi.string()).allow(null),

  taskPrice: Joi.number().required().min(1).max(1000000).messages({
    "number.base": "Task price must be a number",
    "number.min": "Task price must be at least 1",
    "number.max": "Task price cannot exceed 10 lakhs",
  }),
});
