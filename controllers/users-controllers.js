const createUser = (req, res) => {
  const user = { ...req.body };
  console.log(user);
  res.json("created");
};

const usersActions = {
  createUser,
};

export default usersActions;
