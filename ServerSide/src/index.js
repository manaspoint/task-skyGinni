const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const dataRouter = require("./routers/data.router");
require("dotenv").config({ path: "./config/dev.env" });
const contexath = "/rest/api";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(contexath, dataRouter);

app.get("/", (req, res) => {
  res.send("Welcoem to SkyGini");
});
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => console.log(`Server is running on ${PORT} `));
