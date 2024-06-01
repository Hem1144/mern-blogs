import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import env from "./util/validateEnv";

const app = express();

const port = env.PORT;
const mongoConnectionString = env.MONGO_CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("This is get API !");
});

mongoose
  .connect(mongoConnectionString as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

export default app;
