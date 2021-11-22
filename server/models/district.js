const mongoose = require('mongoose')
const districtSchema = mongoose.Schema({
  name: String,
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('District', districtSchema)
