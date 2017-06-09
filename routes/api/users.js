var express = require('express');
var router = express.Router();
var User = require('../../models/users');
var usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;