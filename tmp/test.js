function User() {
	return new User.prototype.init()
}
User.prototype.init = function() {
	this.name = 'Sunhaikuo'
}
User.prototype.say = function() {
	console.log(this.name)
}

// var u = new User() 
// u.init()
// u.say()
User.prototype.init.prototype = User.prototype
User().say()