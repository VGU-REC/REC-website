// import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express";
import "dotenv/config";
import {
  routerAchievement,
  routerBlog,
  routerRecEvent,
  routerWorkShop,
} from "./routes";

const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
app.use(express.json());
app.use("/achievement", routerAchievement);
app.use("/blog", routerBlog);
// app.use("/user", routerUser);
app.use("/work-shop", routerWorkShop);
app.use("/rec-event", routerRecEvent);
app.use("*", (req, res) => res.status(404).send("Page not found"));
