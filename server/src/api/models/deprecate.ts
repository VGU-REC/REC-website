// import { Achievement } from "../../types";
// import { pool, table } from "../../config";
// import { queryPost, TableType } from "../../api/utils/queryStatements";
// export const getAchievement = async (id: string, tableName: string) => {
//   if (table.includes(tableName)) {
//     return await pool.query("SELECT * FROM achievement WHERE ID = $1", [id]);
//   } else {
//     throw new Error("Please insert appropriate tables from the array " + table);
//   }
// };

// export const addAchievement = async (tableName: keyof TableType) => {
//   return await pool.query(queryPost[tableName]);
//   // if (table.includes(tableName)) {
//   //   return await pool.query(queryPost[tableName],
//   //     []
//   //   );
//   // } else {
//   //   throw new Error("Please insert appropriate tables from the array " + table);
//   // }
// };
// // export const get = async (id: string, object: DataType) => {
// //   return await pool.query(`SELECT * FROM ${object} WHERE ID = $1`, [id]);
// // };
