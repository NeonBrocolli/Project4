var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  user: {type: Scema.Types.ObjectId, ref: 'User'},
  ratings: null
})

module.exports = mongoose.model('Video', videoSchema);