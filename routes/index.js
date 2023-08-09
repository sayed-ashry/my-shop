import { Router } from "express";
import { body } from "express-validator";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", controllers.getIndex);

router.get("/addProduct", controllers.getAddProduct);

router.post(
  "/addProduct",
  [
    body("title")
      .trim()
      .isLength({ min: 4 })
      .withMessage("title should more than 4"),
  ],
  controllers.postAddProduct
);

export default router;
