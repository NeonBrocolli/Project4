var express = require('express');
var router = express.Router();
var videosCtrl = require('../../controllers/videos');

/*---------- Public Routes ----------*/
router.post('/', videosCtrl.create);
router.get('/', videosCtrl.index);



/*---------- Protected Routes ----------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;