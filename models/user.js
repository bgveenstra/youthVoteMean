/*
 * POST MODEL
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10);

var UserSchema = new Schema({
    username: String
  , email: String
  , DOB  : { type: Date }
  , passwordDigest: String
});

UserSchema.statics.createSecure = function (email, password, callback) {
 // `this` references our schema
 // store it in variable `that` because `this` changes context in nested callbacks
 var that = this;

 // hash password user enters at sign up
 bcrypt.genSalt(function (err, salt) {
   bcrypt.hash(password, salt, function (err, hash) {
     console.log(hash);

     // create the new user (save to db) with hashed password
     that.create({
       email: email,
       passwordDigest: hash
     }, callback);
   });
 });
};

UserSchema.statics.authenticate = function (email, password, callback) {
 this.findOne({email: email}, function (err, user) {
   console.log(user);
   if (user === null) {
     callback('Can\'t find user with email ' + email, user);
   } else if (user.checkPassword(password)) {
     callback(null, user);
   }
 });
};

UserSchema.methods.checkPassword = function (password) {
 return password == this.password;
};

// EXPORT POST MODEL
var User = mongoose.model('User', UserSchema);

module.exports = User;