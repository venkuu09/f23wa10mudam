var express = require('express');
var router = express.Router();

/* Math.round function */
router.get('/', function(req, res, next) {
  var randomNumber = Math.random()* 100;
  var x = randomNumber;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }

  var result = Math.round(x);
  var responseText = `Math.round(${x}) is ${result}`;
  
  res.render('computation', { title: responseText });
});

module.exports = router;
