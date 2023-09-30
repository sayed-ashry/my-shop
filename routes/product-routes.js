import { Router } from "express";
import createValidate from "../middleware/validate.js";
import productsActions from "../controllers/products-controllers.js";

const productRoutes = Router();


productRoutes
  .route("/products")
  .get(productsActions.getAllProducts)
  .post(createValidate(), productsActions.createProduct);

productRoutes
  .route("/products/:productId")
  .get(productsActions.getProduct)
  .delete(productsActions.deleteProduct)
  .patch(productsActions.updateProduct);

export default productRoutes;
