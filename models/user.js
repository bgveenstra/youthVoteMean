/*
 * POST MODEL
 */
bcrypt = require('bcrypt'),
salt = bcrypt.genSaltSync(10);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    created_at  : { type: Date }
  , updated_at  : { type: Date }
  , email: String
  , passwordDigest: String
});

// BEFORE/AFTER FILTER
UserSchema.pre('save', function (next) {
  // SET CREATED_AT AND UPDATED_AT
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }

  next();
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
       username: username,
       email: email,
       DOB: DOB,
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
mongoose.model('User', UserSchema);
