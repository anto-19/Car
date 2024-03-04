import express from "express";
import mongoose from "mongoose";
import userDetails from "./userDetails.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

const JWT_SECRET =
  "ewqeqwrterwterterwerweeq231324235234466345456453erwfsd@##$!#$$%^^&$RU^&DUSA";

app.use(cors());
const mongoUrl =
  "mongodb+srv://njteh1999:q5gzXTBCUnC52WPP@cluster0.urmse1r.mongodb.net/";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((e) => console.log(e));

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "invalid password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;

    User.findOne({ email: useremail }).then((data) => {
      res.send({ status: "ok", data: data }).catch((error) => {
        res.send({ status: "error", data: error });
      });
    });
  } catch (error) {
    console.log("error");
  }
});

app.listen(5000, () => {
  console.log("server started");
});
