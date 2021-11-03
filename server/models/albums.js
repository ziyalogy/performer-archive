const mongoose = require('mongoose');
const albumSchema = mongoose.Schema({
  title: String,
  artist: String,
  yearReleased: String,
  artists: String,
  songs: String,
  artImage: String,
  description: String,
  copyright: String,
  label: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Album", albumSchema);
