import dotenv from "dotenv";
import mongoose from "mongoose";

const env = dotenv.config().parsed;

const databaseConnection = () => {
  mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_NAME,
  });

  const connection = mongoose.connection;
  connection.on("error", console.error.bind(console, "Connection error :"));
  connection.once("open", () => {
    console.log(`Connected to MongoDB : ${env.MONGODB_NAME}`);
  });
};

export default databaseConnection;
