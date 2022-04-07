const express = require("express");
const cors = require("cors");
const studentsRoutes = require("./routes/studentsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentsRoutes);

module.exports = app;
