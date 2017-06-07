var Video = require('../models/videos');

const videoFeed = [
  {
    title: "From Above",
    url: "https://www.youtube.com/watch?v=OBAUsojgy6k"
  },
  {
    title: "BLEPO",
    url: "https://www.youtube.com/watch?v=JQ24UHbhFM8"
  },
  {
    title: "In the Shadows",
    url: "https://www.youtube.com/watch?v=DXRM40AIwTY"
  }
];

function index(req, res) {
  // res.json(videoFeed);
  Video.find({}).exec().then(videos => res.json(videos));
}

function forUser(req, res) {
  Video.find({user: req.user._id})
  .exec().then(videos => res.json(videos));
}

function create(req, res) {
  var video = new Video(req.body);
  video.user = req.user._id;
  video.save()
  .then(() => res.json(video));
}

module.exports = {
  index,
  create,
  forUser
};