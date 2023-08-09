import { validationResult } from "express-validator";
import Product from "../models/product.js";

const getIndex = (req, res) => {
  res.render("index");
};

const getAddProduct = (req, res) => {
  res.render("addProduct", { validationErrors: [], product: {} });
};

const postAddProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("addProduct", {
        validationErrors: errors.array(),
        product: { ...req.body },
      });
    }
    const { title } = req.body;
    console.log(title);
    const product = await Product.create({ title: title });
    product.save();
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const controllers = {
  getIndex,
  getAddProduct,
  postAddProduct,
};

export default controllers;
