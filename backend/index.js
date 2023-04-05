const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./configs/connect");
const todoRouter = require("./routes/todo");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "50mb" }));

const PORT = process.env.PORT || 5000;

app.use("/v1/todo", todoRouter);
app.get("/", (req, res) => res.status(200).json("Todo API is already!"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
