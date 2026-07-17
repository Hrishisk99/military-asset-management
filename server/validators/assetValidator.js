import { body } from "express-validator";

export const createAssetValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Asset name is required"),

  body("type")
    .isIn(["Weapon", "Vehicle", "Ammunition"])
    .withMessage("Invalid asset type"),

  body("unit")
    .isIn(["Piece", "Box", "Vehicle"])
    .withMessage("Invalid unit"),
];

export const updateAssetValidator = createAssetValidator;