import { validationResult } from "express-validator";

import Product from "../models/product.js";

const getAllProducts = (req, res) => {
  Product.find().then((data) => {
    res.json(data);
  });
};

const createProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ msg: "title should more than 3" });
  }
  const product = new Product({
    title: req.body.title,
  });
  product.save();
  res.json("created");
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
    res.json("deleted");
  });
};

const updateProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndUpdate(productId, { ...req.body }).then(() => {
    res.json("updated");
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
