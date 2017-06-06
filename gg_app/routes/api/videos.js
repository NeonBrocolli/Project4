var express = require('express');
var router = express.Router();
var Video = require('../../models/videos');
var videosCtrl = require('../../controllers/videos');

/*---------- Public Routes ----------*/
router.post('/videos', videosCtrl.postVid);



/*---------- Protected Routes ----------*/





module.exports = router;