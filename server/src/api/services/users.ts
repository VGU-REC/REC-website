// import { Request, Response } from "express";
// import { pool } from "../../config/dbconfig";
// const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await pool.query("SELECT * FROM users ORDER BY ID ASC");
//     res.status(200).json(users.rows);
//   } catch (error) {
//     console.log("error");
//   }
// };

import { AppDataSource } from "../../config";
import { User } from "../../types";
// import { UserEntity } from "../entities/users";

// const createUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, role } = req.body;
//     if (!(name && email && role)) {
//       throw new Error("Please insert all value");
//     } else {
//       console.log(name, email, role);
//       const users = await pool.query(
//         "INSERT INTO users(name, email, role) VALUES ($1, $2, $3) RETURNING *",
//         [name, email, role]
//       );
//       res.status(200).json("Create successfully");
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("con ga nay");
//     // res.json(error);
//     res.status(400).json(error);
//   }
// };

// const updateUser = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const { name, email, role } = req.body;
//     const update = await pool.query(
//       "UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING*",
//       [name, email, role, id]
//     );
//     res.status(200).json(update);
//   } catch (error) {}
// };

// const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const update = await pool.query("DELETE FROM users WHERE id = $1", [id]);
//     res.status(200).json("Delete successfully");
//   } catch (error) {}
// };
// export { getUsers, createUser, updateUser };
const Tho: User = {
  email: "phanchitho@gmail.com",
  role: "ADMIN",
};
// export const createUser = async () => {
//   const user = await AppDataSource.getRepository(UserEntity).create({
//     email: "hello",
//     role: "ADMIN"
//   })
  
// };
