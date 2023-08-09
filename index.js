import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import routes from "./routes/index.js";

const app = express();

dotenv.config();

app.set("view engine", "ejs");

app.set("views", "views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use("*", (req, res) => {
  res.render("notFound");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("errpage");
});

try {
  await connect(process.env.DB_URI);
  app.listen(process.env.PORT);
} catch (err) {
  console.error(
    "An error occurred while connecting to the MongoDB database or starting the server"
  );
}

export default app;
