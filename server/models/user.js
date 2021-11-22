const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  userID: String,
  firstName: {
    type: String,
    uppercase: true,
  },
  lastName: {
    type: String,
    uppercase: true,
  },
  username: {
    type: String,
    uppercase: true,
  },
  role: {
    type: String,
    uppercase: true,
  },
  profile: String,
  activation: String,
  userImage: String,
  gender: String,
  phoneNumber: String,
  altPhoneNumber: String,
  email: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
