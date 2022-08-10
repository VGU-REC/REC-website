import express from "express";

import { routerController } from "./routerController";

const router = express.Router();

routerController(router, "rec-event");
export { router as routerRecEvent };
