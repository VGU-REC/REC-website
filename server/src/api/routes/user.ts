import express from "express";

import { routerController } from "./routerController";
import { CustomizeRouter } from "../../types/Router";
const router = express.Router();

routerController(router, "users", { generateIdFrom: "email" });
export { router as routerUser };
