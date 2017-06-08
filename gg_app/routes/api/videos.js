var express = require('express');
var router = express.Router();
var videosCtrl = require('../../controllers/videos');

/*---------- Public Routes ----------*/
router.post('/', checkAuth, videosCtrl.create);
router.get('/', videosCtrl.index);
router.get('/videos', checkAuth, videosCtrl.forUser);



/*---------- Protected Routes ----------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;