import { body } from "express-validator";

const createValidate = () => {
  return [body("title").isLength({ min: 3 })];
};

export default createValidate;
