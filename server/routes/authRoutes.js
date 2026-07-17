import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

const router = express.Router();

// Public Routes
router.post(
  "/register",
  registerValidator,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidator,
  validate,
  loginUser
);

// Protected Route
router.get("/me", protect, getCurrentUser);

export default router;