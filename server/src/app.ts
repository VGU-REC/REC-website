import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello tho gae");
});

app.listen(5000, () => {
  console.log("woooooooooo");
  console.log("http://localhost:5000");
});
