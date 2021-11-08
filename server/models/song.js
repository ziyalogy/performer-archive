const mongoose = require('mongoose');
const songSchema = mongoose.Schema({
  title: String,
  artist: {
    type: Schema.ObjectId,
    ref:'Artist'
  },
  album: {
    type: Schema.ObjectId,
    ref:'Album',
  },
  yearReleased: String,
  artists: Array,
  writers: Array,
  artImage: String,
  description: String,
  copyright: String,
  label: {
    type: Schema.ObjectId,
    ref:'Label',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Song", songSchema);
