import express from "express";
import { pool } from "config";
const router = express.Router();

router.get("/", async function (req, res) {
  const users = await pool.query("SELECT * FROM users ORDER BY ID ASC");
  res.status(200).json(users.rows[0]);
});
