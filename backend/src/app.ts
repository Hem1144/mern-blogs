import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is get API !");
});

export default app;
