var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  skilledVotes: {type: Number, default: 0},
  funnyVotes: {type: Number, default: 0},
  rageVotes: {type: Number, default: 0},
  likeVotes: {type: Number, default: 0}
})

module.exports = mongoose.model('Video', videoSchema);