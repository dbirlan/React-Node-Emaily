const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema setup
const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
