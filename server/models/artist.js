const mongoose = require('mongoose');
const artistSchema = mongoose.Schema({
  artistID: String,
  nationalID: String,
  firstName: {
    type: String,
    uppercase: true
 },
  lastName: {
    type: String,
    uppercase: true
 },
  middleName: {
    type: String,
    uppercase: true
 },
  otherName: {
    type: String,
    uppercase: true
  },
  stageName: String,
  dateOfBirth: String,
  district: String,
  category: String,
  genres: String,
  activeSince: String,
  band: String,
  albums: String,
  label: String,
  artistImage: String,
  bio: String,
  phoneNumber: String,
  altPhoneNumber: String,
  email: String,
  uprsCode: String,
  uprsType: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Artist", artistSchema);
