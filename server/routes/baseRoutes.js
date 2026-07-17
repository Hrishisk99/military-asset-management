import express from "express";
import {
  createBase,
  getAllBases,
  getBaseById,
  updateBase,
  deleteBase,
} from "../controllers/baseController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";
import { ROLES } from "../constants/roles.js";

const router = express.Router();

router
  .route("/")
  .post(
    protect,
    authorize(ROLES.ADMIN),
    createBase
  )
  .get(protect, getAllBases);

router
  .route("/:id")
  .get(protect, getBaseById)
  .put(
    protect,
    authorize(ROLES.ADMIN),
    updateBase
  )
  .delete(
    protect,
    authorize(ROLES.ADMIN),
    deleteBase
  );

export default router;