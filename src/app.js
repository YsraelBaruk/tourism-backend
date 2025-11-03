import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

import userRoutes from "./routes/userRoutes.js";
import roteiroRoutes from "./routes/roteiroRoutes.js";
import roteiroTypeRoutes from "./routes/roteiroTypeRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/users", userRoutes);
app.use("/roteiros", roteiroRoutes);
app.use("/roteiro-types", roteiroTypeRoutes);

export default app;
