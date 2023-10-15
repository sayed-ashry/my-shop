import { env } from "node:process";
import express from "express";
import { connect } from "mongoose";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import productRoutes from "./routes/product-routes.js";

const app = express();

app.use(express.json());

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization"],
  })
);

app.use(productRoutes);

app.use("*", (req, res) => {
  res.status(404).json("this route not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

try {
  await connect(env.DB_URI);
  app.listen(env.PORT);
} catch (error) {
  console.log(
    "Failed to connect to database. Please check your database credentials and connection settings."
  );
}
