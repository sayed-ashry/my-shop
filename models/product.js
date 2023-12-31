import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: String,
  price: Number,
});

const Product = model("Product", productSchema);
export default Product;
