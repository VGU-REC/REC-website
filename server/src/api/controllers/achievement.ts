import { Response, Request } from "express";
import { Achievement } from "../../types";
import { pool } from "../../config";
import { QueryResult } from "pg";
import { get } from "../../api/models/crud";

export const getAchievementbyID = async function (req: Request, res: Response) {
  const id = req.params.id;
  const achievement = await get(id);
  console.log(achievement.rows[0]);
  res.status(200).json(achievement.rows[0]);
};

export const createNewAchievement = async function (req: Request, res: Response) {
  const id = req.params.id;
  const achievement: Achievement = req.body;
  const add = await pool.query(
    "INSERT INTO achievement (title, imagepath,date) VALUES ($1, $2, $3) RETURNING *",
    [achievement.title, achievement.imagePath, achievement.date]
  );

  console.log(add);

  res.status(200).send("Successfully");
};

export const editAchievement = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, role } = req.body;
  const update = await pool.query(
    "UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING*",
    [name, email, role, id]
  );
  res.status(200).json(update);
};
