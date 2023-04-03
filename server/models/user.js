const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Username exist"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: [true, "Email exist"],
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
  },
  provider: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
