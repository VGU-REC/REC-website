// import { Response, Request } from "express";
// import { Achievement } from "../../types";
// import { pool } from "../../config";
// import { QueryResult } from "pg";
// import { addAchievement, getAchievement } from "../../api/models/crud";

// export const getAchievementbyID = async function (req: Request, res: Response) {
//   const id = req.params.id;
//   await getAchievement(id, "achievement")
//   .then((result) => res.status(200).json(result.rows[0]))
//   .catch((err) => console.log(err)) 
// };

// export const createNewAchievement = async function (req: Request, res: Response) {
//   const achievement: Achievement = req.body;
//   addAchievement(achievement)
//     .then(() => res.status(200).send("Successfully"))
//     .catch((error) => console.log(error));
// };

// export const editAchievement = async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const { name, email, role } = req.body;
//   const update = await pool.query(
//     "UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING*",
//     [name, email, role, id]
//   );
//   res.status(200).json(update);
// };  
