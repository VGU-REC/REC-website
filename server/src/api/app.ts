import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express";
// import { routerAchievement } from "./routes/achievement";
const app = express();

app.use(express.json());
app.listen(5001, () => {
  console.log("http://localhost:5001");
  console.log("woooooooooo");
});
// app.use("/achievement", routerAchievement);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
const test = () => {
  console.log("testing");
};
export { test };
