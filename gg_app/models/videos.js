var mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
  skilled: {type: Number, enum: [1,2,3,4,5] },
  funny: {type: Number, enum: [1,2,3,4,5] },
  rage: {type: Number, enum: [1,2,3,4,5] },
  like: {type: Number, enum: [1,2,3,4,5] }
})

var videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  ratings: [ratingSchema]
})

module.exports = mongoose.model('Video', videoSchema);