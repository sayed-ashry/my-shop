import { body } from "express-validator";

export const userValidator = [
  body("name")
    .notEmpty()
    .withMessage("you should enter name ")
    .isString()
    .withMessage("name should be string ")
    .isLength({ min: 3 })
    .withMessage("name should be greater than 2"),
];

export default userValidator;
