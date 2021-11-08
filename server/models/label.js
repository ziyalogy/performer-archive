const mongoose = require('mongoose');
const labelSchema = mongoose.Schema({
  name: String,
  ownerfname: String,
  ownerlname: String,
  location: String,
  signedArtists: String,
  slogan: String,
  logoOflabel: String,
  sponsors: String,
  founded: String,
  profile: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Label', labelSchema);
