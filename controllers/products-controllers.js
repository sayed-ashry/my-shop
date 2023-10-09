import Product from "../models/product.js";
import { validationResult } from "express-validator";

const getAllProducts = (req, res) => {
  Product.find().then((data) => {
    res.json(data);
  });
};

const createProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json("some inputs wrong");
  }
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  product.save();
  res.json("Product Created.");
};

const getProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId).then((data) => {
    res.json(data);
  });
};

const deleteProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findOneAndDelete(productId).then(() => {
    res.json("Product Deleted.");
  });
};

const updateProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndUpdate(productId, { ...req.body }).then(() => {
    res.json("Product Updated.");
  });
};

const productsActions = {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productsActions;
