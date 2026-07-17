import express from "express";

import {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
} from "../controllers/assetController.js";

import {
  protect,
  authorize,
} from "../middleware/authMiddleware.js";

import { ROLES } from "../constants/roles.js";

const router = express.Router();

router
  .route("/")
  .post(
    protect,
    authorize(ROLES.ADMIN),
    createAsset
  )
  .get(protect, getAllAssets);

router
  .route("/:id")
  .get(protect, getAssetById)
  .put(
    protect,
    authorize(ROLES.ADMIN),
    updateAsset
  )
  .delete(
    protect,
    authorize(ROLES.ADMIN),
    deleteAsset
  );

export default router;