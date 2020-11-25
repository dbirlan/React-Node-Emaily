const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema setup
const userSchema = new Schema({
  googleId: String,
  email: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);
