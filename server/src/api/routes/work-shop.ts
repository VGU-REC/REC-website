import express from "express";

import { routerController } from "./routerController";

const router = express.Router();

routerController(router, "work-shop");
export { router as routerWorkShop };
