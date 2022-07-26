import express from "express";

import { routerController } from "./routerController";

let router = express.Router();

routerController(router, "blog");
export { router as routerBlog };
