import { Router } from "express";
import { ConcreateRouter, CustomizeRouter } from "../../types/Router";
import {
  createController,
  deleteController,
  getController,
  updateController,
} from "../controllers/crudController";
import {
  countItemsController,
  getItemsController,
} from "../controllers/pagination";
import { EntityCollection } from "../entities/collection";

export function routerController(
  router: Router,
  table: keyof typeof EntityCollection,
  option: CustomizeRouter = { generateIdFrom: "title" }
) {
  if (option.limit === undefined) option.limit = 30;
  router.get("/", (req, res) => getItemsController(req, res, table));
  router.get("/items", (req, res) => countItemsController(req, res, table));
  // cái này coi chừng nhầm lẫn với items có id là items :v
  router.get("/:id", (req, res) => getController(req, res, table));
  router.post("/", (req, res) =>
    createController(req, res, table, option as ConcreateRouter)
  );
  router.put("/:id", (req, res) =>
    updateController(req, res, table, option as ConcreateRouter)
  );
  router.delete("/:id", (req, res) => deleteController(req, res, table));
}
