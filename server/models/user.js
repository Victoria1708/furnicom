const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true
  },
  email: {
    type: String,
    index: true,
    unique: true
  },
  hashedPassword: String
});

UserSchema.loadClass(class {
  set password(password) {
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
