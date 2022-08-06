const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { versionKey: false});

schema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

schema.statics.login = async function(username, password) {
	const user = await this.findOne({ username });
	if (user) {
	  const auth = await bcrypt.compare(password, user.password);
	  if (auth) {
		return user;
	  }
	  throw Error('incorrect password');
	}
	throw Error('incorrect username');
};

const User = mongoose.model('User', DataSchema, 'users');
module.exports = User;