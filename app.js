import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import apiRouter from "./routes/api.js";
import databaseConnection from "./connection.js";

const env = dotenv.config().parsed;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:8000" }));

app.use("/", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404_NOT_FOUND" });
});

databaseConnection();

app.listen(env.APP_PORT, () => {
  console.log(`server running on port ${env.APP_PORT}`);
});
