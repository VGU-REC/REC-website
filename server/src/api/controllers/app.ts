import { createUser, getUsers, updateUser } from "../models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express";
const app = express();
app.listen(5001, () => {
  console.log("http://localhost:5001");
  console.log("woooooooooo");
});
app.use(express.json());

app.get("/users", getUsers);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
const test = () => {
  console.log("testing");
};
export { test };
