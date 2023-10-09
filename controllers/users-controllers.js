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
  const User = new User({
    name: req.body.name,
    email: req.body.email,
  });
  User.save();
  res.json("User Created.");
};

const getUser = (req, res) => {
  const UserId = req.params.UserId;
  User.findById(UserId).then((data) => {
    res.json(data);
  });
};

const deleteUser = (req, res) => {
  const UserId = req.params.UserId;
  User.findOneAndDelete(UserId).then(() => {
    res.json("User Deleted.");
  });
};

const updateUser = (req, res) => {
  const UserId = req.params.UserId;
  User.findByIdAndUpdate(UserId, { ...req.body }).then(() => {
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
