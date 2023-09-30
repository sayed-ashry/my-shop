import { Router } from "express";
import usersActions from "../controllers/users-controllers.js";

const usersRoutes = Router();

usersRoutes.route("/users").post(usersActions.createUser);

export default usersRoutes;
