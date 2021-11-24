const mongoose = require('mongoose')
const districtSchema = mongoose.Schema({
  Name: String,
  districtImage: String,
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('District', districtSchema)
