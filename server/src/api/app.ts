// import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express";
import { routerAchievement } from "./routes/achievement";
import { routerBlog } from "./routes/blog";
import { routerRecEvent } from "./routes/rec-event";
import { routerUser } from "./routes/user";
import { routerWorkShop } from "./routes/work-shop";
const app = express();

app.listen(5001, () => {
  console.log("http://localhost:5001");
  console.log("woooooooooo");
});
app.use(express.json());
app.use("/achievement", routerAchievement);
app.use("/blog", routerBlog);
app.use("/user", routerUser);
app.use("/work-shop", routerWorkShop);
app.use("/rec-event", routerRecEvent);
// const test = () => {
//   console.log("testing");
// };
// export { test };
// const router = express.Router();

// console.log(router);
