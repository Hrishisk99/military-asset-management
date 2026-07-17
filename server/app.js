import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import baseRoutes from "./routes/baseRoutes.js";
import assetRoutes from "./routes/assetRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/bases", baseRoutes);
app.use("/api/assets", assetRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Military Asset Management API is running",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

export default app;