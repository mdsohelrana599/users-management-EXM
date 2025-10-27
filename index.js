const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("users-management-server");
});

const users = [
  { id: 1, name: "sohel", email: "sohel@gmail,com" },
  { id: 2, name: "shwon", email: "shwon@gmail,com" },
  { id: 1, name: "ruram", email: "ruram@gmail,com" },
  { id: 1, name: "masud", email: "masud@gmail,com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`users-management-server started on port : ${port}`);
});
