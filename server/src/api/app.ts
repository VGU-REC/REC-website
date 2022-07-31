// import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express";
import {
  routerAchievement,
  routerBlog,
  routerRecEvent,
  routerUser,
  routerWorkShop,
} from "./routes";

const app = express();
const gate = 3001;
app.listen(gate, () => {
  console.log(`http://localhost:${gate}`);
});
app.use(express.json());
app.use("/achievement", routerAchievement);
app.use("/blog", routerBlog);
app.use("/user", routerUser);
app.use("/work-shop", routerWorkShop);
app.use("/rec-event", routerRecEvent);
app.use("*", (req, res) => res.status(404).send("Page not found"));
