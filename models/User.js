const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Contact: {
    type: Number,
    required: true,
    // unique: true
  },
  Dob: {
    type: String,
    required: true
  },
  CityName: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    required: true,
    default: "Admin"
  }
}, { timestamps: true });

// Model safe way to prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
