const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username required !!!"],
      unique: [true, "unique username required !!!"],
    },
    email: {
      type: String,
      required: [true, "email required !!!"],
      unique: [true, "unique email required !!!"],
    },
    password: {
      type: String,
      required: [true, "password required !!!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
