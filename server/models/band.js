const mongoose = require('mongoose');
const bandSchema = mongoose.Schema({
  name: String,
  ownerfname: String,
  ownerlname: String,
  home: String,
  members: String,
  slogan: String,
  logo: String,
  sponsors: String,
  yearFounded: String,
  awards: String,
  albums: String,
  genres: String,
  profile: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Band', bandSchema);
