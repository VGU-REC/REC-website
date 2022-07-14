import { pool } from "../../config";

export const get = async (id: string) => {
  return await pool.query("SELECT * FROM achievement WHERE ID = $1", [id]);
};

export const add = (object: string): string => {
  return "Thanh";
};
