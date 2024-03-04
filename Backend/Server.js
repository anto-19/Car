const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const routes = require("./routes/TaskRouter");
const partsRoutes = require("./routes/PartsRouter");
const userRoutes = require("./routes/UserRouter");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);
app.use("", userRoutes);
app.use("/api", partsRoutes);
app.listen(PORT, () => console.log(`listening at ${PORT}`));
