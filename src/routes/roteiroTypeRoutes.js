import express from "express";
import { createRoteiroTypeController, getRoteiroTypesController } from "../controllers/roteiroTypeController.js";

const router = express.Router();

router.post("/", createRoteiroTypeController);
router.get("/", getRoteiroTypesController);

export default router;
