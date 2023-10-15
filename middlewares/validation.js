import { body } from "express-validator";

const productValidator = [
  body("title")
    .notEmpty()
    .withMessage("you should enter title ")
    .isString()
    .withMessage("title should be string ")
    .isLength({ min: 3 })
    .withMessage("title should be greater than 2"),
  body("price")
    .notEmpty()
    .withMessage("you should enter price ")
    .isNumeric()
    .withMessage("price should be Number ")
    .custom((value) => {
      if (value === 0) {
        throw new Error("price should greater than 0");
      } else {
        return true;
      }
    }),
];
export default productValidator;
