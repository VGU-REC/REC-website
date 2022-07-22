import { Request, Response } from "express";
import { getbyID, create, update, deleteByID } from "../services/crud";

export const getAchievement = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getbyID(id, "achievement");
  res.status(200).json(result);
};

export const createAchievement = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await create(data, "achievement");
  res.status(200).json(result);
};
export const updateAchievement = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const result = await update(id, data, "achievement");
  res.status(200).json(result);
};

export const deleteAchievement = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteByID(id, "achievement");
  res.status(200).json(result);
};