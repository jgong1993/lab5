var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add', data);
	var name = req.query.name;
	var description = req.query.description;
	var fake = "http://lorempixel.com/400/400/people";
	console.log(name);
	console.log(description);
	console.log(fake);

	var newFriend = {
		'name' : name,
		'description' : description,
		'imageURL' : fake
	}
	data["friends"].push(newFriend)
 }