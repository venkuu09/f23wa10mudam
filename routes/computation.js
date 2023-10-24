var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let randomNumber = Math.floor(Math.random()) * 100;
  let x = randomNumber;

  // if (req.query.x) {
  //   // If a query argument 'x' is provided, use that value instead
  //   x = parseFloat(req.query.x);
  // }
  const result = Math.round(x);
  const responseText = `Math.round() applied to ${x} is ${result}`;
  res.send(responseText);
  // res.render('computation', { title: 'responseText' });
});

module.exports = router;
