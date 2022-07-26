import e, { Request, Response } from "express";
import { title } from "process";
import { QueryFailedError } from "typeorm";
import { Achievement } from "../../types";
import { Data, Database } from "../../types/Database";
import { ConcreateRouter } from "../../types/Router";
import { EntityCollection } from "../entities/collection";
import { generateID } from "../helpers/generateID";
import { getbyID, create, update, deleteByID } from "../services/crud";

export const getController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection
) => {
  console.log(req.params);
  const id = req.params.id;
  const result = await getbyID(id, table);
  if (result === null) {
    res.status(404).send(`ID ${id} is not exist`);
    return;
  }
  res.status(200).json(result);
};

export const createController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection,
  option: ConcreateRouter
) => {
  try {
    const data = req.body;
    const { generateIdFrom, limit } = option;
    data.id = generateID(data[generateIdFrom], limit, generateIdFrom);
    const result = await create(data, table);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).send((error as QueryFailedError).driverError);
  }
};
export const updateController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection,
  option: ConcreateRouter
) => {
  try {
    const data = req.body;
    const { generateIdFrom, limit } = option;
    const id = req.params.id;
    data.id = generateID(data[generateIdFrom], limit, generateIdFrom);
    const result = await update(id, data, table);
    let message = "Update successfully";
    if (result.affected === 0) {
      message = "Data already updated";
    }
    res.status(200).send(message);
  } catch (error) {
    res.status(404).send((error as Error).message);
  }
};

export const deleteController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection
) => {
  const id = req.params.id;
  const result = await deleteByID(id, table);
  if (result.affected === 0) {
    res.status(404).send(`ID ${id} is not exist`);
    return;
  }
  res.status(200).send("Delete successfully");
};
