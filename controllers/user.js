const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
const GetUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  GetUser,
};
