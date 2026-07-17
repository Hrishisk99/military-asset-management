import { body } from "express-validator";
import { ROLE_VALUES } from "../constants/roles.js";

export const registerValidator = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required."),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  body("role")
    .optional()
    .isIn(ROLE_VALUES)
    .withMessage("Invalid role."),
];

export const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required."),
];