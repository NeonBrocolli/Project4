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
  res.json(videoFeed);
  console.log(req.body)
}

function create(req, res) {
  console.log(Video)
}

module.exports = {
  index,
  create
};