import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(3000);
