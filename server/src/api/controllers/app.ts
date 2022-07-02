import express from "express";


const tho: string = "hello";
const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
  console.log("woooooooooo");
});
