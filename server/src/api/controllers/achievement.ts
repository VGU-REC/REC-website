import { Request, Response } from "express";
import { generateID } from "../helpers/generateID";
import { getbyID, create, update, deleteByID } from "../services/crud";

export const getAchievement = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getbyID(id, "achievement");
  console.log(result);
  console.log(typeof result);
  res.status(200).json(result);
};

export const createAchievement = async (req: Request, res: Response) => {
  const data = req.body;
  data.id = generateID(data.title, 10); //nên bỏ vào crud hơn sau khi thống nhất cái nào làm idn
  const result = await create(data, "achievement");
  res.status(200).json(result);
};
export const updateAchievement = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const result = await update(id, data, "achievement");
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send("Something went wrong ");
  }
};

export const deleteAchievement = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteByID(id, "achievement");
  res.status(200).json(result);
};
