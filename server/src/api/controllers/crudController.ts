import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomizeRouter } from "../../types";
import { EntityCollection } from "../entities";
import { generateID } from "../helpers/generateID";
import { getbyID, create, update, deleteByID } from "../services/crud";

export const getController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection
) => {
  // console.log(req.params);
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
  option: CustomizeRouter
) => {
  try {
    const data = req.body;
    const { generateIdFrom, limit } = option;
    data.id = generateID(data[generateIdFrom], limit, generateIdFrom);
    await create(data, table);
    res.status(201).send("Create successfully");
  } catch (error) {
    // need to validation not just use database
    if ((error as QueryFailedError).driverError?.code) {
      if ((error as QueryFailedError).driverError.code === "23505") {
        (error as QueryFailedError).message = "Object already exists";
      } else if ((error as QueryFailedError).driverError.code === "23502") {
        (error as QueryFailedError).message = "Object not have enough property";
      }
    }
    res.status(404).send((error as Error).message);
  }
};
export const updateController = async (
  req: Request,
  res: Response,
  table: keyof typeof EntityCollection,
  option: CustomizeRouter
) => {
  try {
    const data = req.body;
    const { generateIdFrom, limit } = option;
    const id = req.params.id;
    data.id = generateID(data[generateIdFrom], limit, generateIdFrom);
    const result = await update(id, data, table);
    if (result.affected === 0) {
      throw new Error(`Data ${id} is not exist`);
    }
    res.status(200).send("Update successfully");
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
