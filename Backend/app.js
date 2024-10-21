const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
];
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Email");
const sendMail = require("./NodeMail");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://chetanwebtakersit:chetan123@cluster0.krarz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/api/users", (req, res) => {
  return res.send({
    message: "server is runding ",
    users,
  });
});
app.post("/api/users/create", async (req, res) => {
  console.log(req.body, "BODY");
  // await User.updateMany({}, { $unset: { number: "" } });
  const newUsers = req.body;
  console.log(req.body)
  // console.log(typeof newUsers?.number);
  await sendMail(
    newUsers?.email,
    newUsers?.message,
    newUsers?.subject,
    newUsers?.Name
  );

  const newUser = await User.create(newUsers);
  return res.send({
    message: "add new user",
    newUser,
  });
});

app.listen(3000, console.log("server is runing on port 3000"));
