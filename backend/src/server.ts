import mongoose from "mongoose";
import env from "./util/validateEnv";
import app from "./app";

const port = env.PORT;
const mongoConnectionString = env.MONGO_CONNECTION_STRING;

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
    process.exit(1);
  });
