const express = require("express");
const {
  getAllUser,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("./userController");

const router = express.Router();

router.route("/user/").get(getAllUser).post(createUser);

router
  .route("/user/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
