import express from "express";

const app = express();
const port = undefined;

app.get("/", (req, res) => {
  res.send("This is get API !");
});

app.listen(port!, () => {
  console.log(`Server is running on port ${port}`);
});
