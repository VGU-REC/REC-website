// import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express"
import "dotenv/config"
import { routerAchievement, routerBlog, routerRecEvent, routerWorkShop } from "./routes"

const app = express()
app.use(express.json())
app.use("/api/achievement", routerAchievement)
app.use("/api/blog", routerBlog)
// app.use("/user", routerUser);
app.use("/api/work-shop", routerWorkShop)
app.use("/api/rec-event", routerRecEvent)
app.use("*", (req, res) => res.status(404).send("Page not found"))

export { app }
