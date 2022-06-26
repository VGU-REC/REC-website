import express from "express";

interface Quan {
  name: string;
  age: number;
  married: boolean;
}
let userList: Quan[] = [
  {
    name: "cc",
    age: 19,
    married: false,
  },
  {
    name: "cc1",
    age: 19,
    married: true,
  },
  {
    name: "cc2",
    age: 19,
    married: false,
  },
];
const tho: string = "hello";
const app = express();
app.use(express.json());
app.get(/user\/.*thanh$/, (req, res) => {
  res.json(userList);
});
app.post("/users/:quanla", (req, res) => {
  const newUser = req.body;
  console.log(req.params.quanla);
  userList.push(newUser);
  res.send(userList);
  // console.log(res);
  // res.sendStatus(200);
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
  console.log("woooooooooo");
});
