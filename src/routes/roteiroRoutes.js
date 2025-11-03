import express from "express";
import { createRoteiroController, getRoteirosController } from "../controllers/roteiroController.js";

const router = express.Router();

router.post("/", createRoteiroController);
router.get("/", getRoteirosController);

export default router;
