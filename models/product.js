import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: String,
});

const Product = model("Product", productSchema);
export default Product;
