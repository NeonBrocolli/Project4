var express = require('express');
var router = express.Router();
var videosCtrl = require('../../controllers/videos');

router.post('/', checkAuth, videosCtrl.create);
router.get('/', videosCtrl.index);
router.get('/', checkAuth, videosCtrl.forUser);
router.get('/:id/vote/:stat', checkAuth, videosCtrl.voteStat);

function checkAuth(req, res, next) {
  if (req.user) return next();
  console.log(req.user)
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;