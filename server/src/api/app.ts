// import { createUser, getUsers, updateUser } from "./models/users";
// import { getUsers, createUser, updateUser } from "api/models";
import express from "express"
import "dotenv/config"
import { routerAchievement, routerBlog, routerRecEvent, routerWorkShop } from "./routes"

const port = process.env.PORT
const app = express()
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
app.use(express.json())
app.use("/api/achievement", routerAchievement)
app.use("/api/blog", routerBlog)
// app.use("/user", routerUser);
app.use("/api/work-shop", routerWorkShop)
app.use("/api/rec-event", routerRecEvent)
app.use("*", (req, res) => res.status(404).send("Page not found"))
