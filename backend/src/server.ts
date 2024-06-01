import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
if (!mongoConnectionString) {
  throw new Error(
    "MONGO_CONNECTION_STRING environment variable is not defined"
  );
}

app.get("/", (req, res) => {
  res.send("This is get API !");
});

mongoose
  .connect(mongoConnectionString)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
