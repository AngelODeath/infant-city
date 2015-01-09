/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-03
* Time: 07:47 AM
*/

var express = require('express');
var router = express.Router();
var util = require('util');

var app_data = {};
app_data.title = '+L=G10N+';

router.get('/:url', function(req, res) {
    console.log(req.params);
  
    switch (req.params.url) {
        case 'home': 
            res.render('index', app_data);
            break;
        case 'music': 
            res.render('music', app_data);
            break;
        case 'art': 
            res.render('art', app_data);
            break;
        case 'videos': 
            res.render('videos', app_data);
            break;
        case 'culture': 
            res.render('culture', app_data);
            break;
        case 'about': 
            res.render('about', app_data);
            break;
    }
    
});

module.exports = router;