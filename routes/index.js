var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
      title: '+L=G10N+',
      breadcrumb: req.session.lastPage
  });
    
  req.session.lastPage = '/';
});

module.exports = router;
