import { Router } from "express";
import { body } from "express-validator";
import usersActions from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes
  .route("/users")
  .get(usersActions.getAllusers)
  .post(
    [body("name").notEmpty(), body("email").notEmpty()],
    usersActions.createUser
  );

userRoutes
  .route("/users/:userId")
  .get(usersActions.getUser)
  .delete(usersActions.deleteUser)
  .patch(usersActions.updateUser);

export default userRoutes;
