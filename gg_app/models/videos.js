var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  ratings: Number
})

module.exports = mongoose.model('Video', videoSchema);