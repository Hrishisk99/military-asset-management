import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Asset name is required"],
      trim: true,
      unique: true,
    },

    type: {
      type: String,
      required: [true, "Asset type is required"],
      enum: ["Weapon", "Vehicle", "Ammunition"],
    },

    unit: {
      type: String,
      required: [true, "Unit is required"],
      enum: ["Piece", "Box", "Vehicle"],
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Asset = mongoose.model("Asset", assetSchema);

export default Asset;