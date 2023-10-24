var express = require('express');
var router = express.Router();

/* Rendering my name in my data*/
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Venkatesh Mudam' });
});

module.exports = router;
