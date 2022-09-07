var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({success: true, message: 'version:1.0.0'});
});

module.exports = router;
