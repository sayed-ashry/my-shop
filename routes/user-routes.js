import { Router } from "express";
import userValidator from "../middlewares/user-validation.js";
import usersActions from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes
  .route("/users")
  .get(usersActions.getAllUsers)
  .post(userValidator, usersActions.createUser);

userRoutes
  .route("/users/:userId")
  .get(usersActions.getUser)
  .delete(usersActions.deleteUser)
  .patch(usersActions.updateUser);

export default userRoutes;
