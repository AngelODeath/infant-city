/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-09
* Time: 05:32 PM
* To change this template use Tools | Templates.
*/
var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'legion'
});


// on routes that end in /users
// ----------------------------------------------------
router.route('/login')
// get the login page (accessed at GET http://localhost:8080/api/login)
.get(function(req, res) {
   res.render('login', { 
      title: '+L=G10N+'
  });
})

// create a user (accessed at POST http://localhost:8080/api/users)
.post(function(req, res) {
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      console.log('connected as id ' + connection.threadId);
    });

    connection.query('SELECT * FROM users;', function(err, rows, fields) {
      if (err) throw err;

      console.log(rows);
    });
        
    connection.end();
        
	var username = req.body.username; //bodyParser does the magic
	var password = req.body.password;
	
	var user = User.build({ username: username, password: password });

	user.add(function(success){
		res.json({ message: 'User created!' });
	},
	function(err) {
		res.send(err);
	});
});


// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

// update a user (accessed at PUT http://localhost:8080/api/users/:user_id)
.put(function(req, res) {
	var user = User.build();	
	  
	user.username = req.body.username;
	user.password = req.body.password;
	
	user.updateById(req.params.user_id, function(success) {
		console.log(success);
		if (success) {	
			res.json({ message: 'User updated!' });
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
})

// get a user by id(accessed at GET http://localhost:8080/api/users/:user_id)
.get(function(req, res) {
	var user = User.build();
	
	user.retrieveById(req.params.user_id, function(users) {
		if (users) {				
		  res.json(users);
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
})

// delete a user by id (accessed at DELETE http://localhost:8080/api/users/:user_id)
.delete(function(req, res) {
	var user = User.build();
	
	user.removeById(req.params.user_id, function(users) {
		if (users) {				
		  res.json({ message: 'User removed!' });
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
});	

// Middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

module.exports = router;