import express from "express";

import { routerController } from "./routerController";
const router = express.Router();
routerController(router, "achievement");

export { router as routerAchievement };
