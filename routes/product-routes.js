import { Router } from "express";
import { body } from "express-validator";
import productsActions from "../controllers/products-controllers.js";

const productRoutes = Router();

productRoutes
  .route("/products")
  .get(productsActions.getAllProducts)
  .post(
    [
      body("title").notEmpty(),
      body("price").notEmpty(),
      body("description").notEmpty(),
    ],
    productsActions.createProduct
  );

productRoutes
  .route("/products/:productId")
  .get(productsActions.getProduct)
  .delete(productsActions.deleteProduct)
  .patch(productsActions.updateProduct);

export default productRoutes;
