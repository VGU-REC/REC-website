import { getbyID } from "../services/crud";
import express from "express";
import {
  createAchievement,
  deleteAchievement,
  getAchievement,
  updateAchievement,
} from "../controllers/achievement";

const router = express.Router();

router.get("/:id", getAchievement);
router.post("/", createAchievement);
router.put("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);
export { router as routerAchievement };
