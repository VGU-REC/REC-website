import express from "express";
import { Achievement } from "../../types";
import { Database, DataType } from "../../types/Database";
import {
  createController,
  deleteController,
  getController,
  updateController,
} from "../controllers/crudController";

import { routerController } from "./routerController";
const router = express.Router();
const option = "something u put for customize";
// routerController(router, "achievement");
const table = "achievement";
// router.get("/:id", (req, res) => getController(req, res, table));
// router.post("/", (req, res) => createController(req, res, table));
// router.put("/:id", (req, res) => updateController(req, res, table));
// router.delete("/:id", (req, res) => deleteController(req, res, table));
routerController(router, "achievement");
export { router as routerAchievement };
