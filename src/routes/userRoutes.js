import express from "express";
import { createUserController, getUsersController } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/", getUsersController);

export default router;
