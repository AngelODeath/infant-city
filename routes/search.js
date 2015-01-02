/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-02
* Time: 09:17 PM
*/

var express = require('express');
var router = express.Router();
 
router.get('/search/:query?', function(req, res) {
  var query = req.params.query;
  console.log(query);
  res.send('respond with a resource');
});
 
 
module.exports = router;
