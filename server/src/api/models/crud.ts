import { Achievement } from "../../types";
import { DataType } from "types/Database";
import { pool } from "../../config";

export const getAchievement = async (id: string) => {
  return await pool.query("SELECT * FROM achievement WHERE ID = $1", [id]);
};


export const addAchievement = async (achievement: Achievement) => {
  return await pool.query(
    "INSERT INTO achievement (title, imagepath,date) VALUES ($1, $2, $3) RETURNING *",
    [achievement.title, achievement.imagePath, achievement.date]
    );
};
// export const get = async (id: string, object: DataType) => {
  //   return await pool.query(`SELECT * FROM ${typeof object} WHERE ID = $1`, [id]);
  // };
  