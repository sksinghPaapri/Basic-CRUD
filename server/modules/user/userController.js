const User = require("./userModel");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log("error in createUser", error);
    res.status(500).json(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user)
      res.status(404).json({ message: "no record found !!! please add some" });
    res.status(200).json(user);
  } catch (error) {
    console.log("error in getAllUser", error);
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ message: `no record found for id ${req.params.id}!!! ` });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log("error in getUserByIdController", error);
    res.status(500).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ message: `no record found for id ${req.params.id}!!! ` });
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(201).json(updatedUser);
    }
  } catch (error) {
    console.log("error in updateUserController", error);
    res.status(500).json("error in updateUserById", error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ message: `no record found for id ${req.params.id}!!! ` });
    } else {
      const deletedUser = await User.deleteOne({ _id: req.params.id });
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    console.log("error in deleteUserController", error);
    res.status(404).json(error);
  }
};
module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
