import { Request, Response } from "express";
import { EntityCollection } from "../entities/collection";
import { countItems, getItems } from "../services/crud";

export const getItemsController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection
) => {
  let page = parseInt(req.query.page as string);
  let limit = parseInt(req.query.limit as string);
  if (isNaN(limit) || limit <= 0) limit = 5;
  if (isNaN(page) || page <= 0) page = 1;
  const result = await getItems(limit, page, table);
  if (result.length === 0) {
    res.status(404).send("No items found");
    return;
  }
  res.status(200).json(result);
};

export const countItemsController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection
) => {
  const result = await countItems(table);
  res.status(200).json(result);
};
