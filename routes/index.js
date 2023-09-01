import { Router } from "express";

import actions from "../controllers/index.js";

const router = Router();

router.get("/", actions.getIndex);

router.get("/products", actions.getProducts);

router.post("/addproduct", actions.addProduct);

export default router;
