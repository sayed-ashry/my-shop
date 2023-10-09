import User from "../models/user.js";
import { validationResult } from "express-validator";

const getAllusers = (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
};

const createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json("some inputs wrong");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  user.save();
  res.json("User Created.");
};

const getUser = (req, res) => {
  const userId = req.params.userId;
  User.findById(userId).then((data) => {
    res.json(data);
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  User.findOneAndDelete(userId).then(() => {
    res.json("User Deleted.");
  });
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndUpdate(userId, { ...req.body }).then(() => {
    res.json("User Updated.");
  });
};

const UsersActions = {
  getAllusers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};

export default UsersActions;
