const mongoose = require("mongoose");



// const SignUpSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: {
//     type: String,
//     validate: {
//       validator: function (value) {
//         // Password is required only if isGoogleAuth is false
//         if (!this.isGoogleAuth && (!value || value.trim() === "")) {
//           return false;
//         }
//         return true;
//       },
//       message: "Password is required unless using Google Authentication.",
//     },
//     default: null, // Set a default value for password
//   },
//   googleId: { type: String },
//   isGoogleAuth: { type: Boolean, default: false },
// });


const SignUpSchema = new mongoose.Schema({
  username: { type: String, required: true ,unique: true},
  email: { type: String, required: true, unique: true,unique: true },
  password: {
    type: String,
    required: false
  /*   required: function () {
      // Require password only if the user is not using Google OAuth
      return !this.googleId;
    }, */
  },
  googleId: { type: String,required:false }, // For storing the Google OAuth ID
},{timestamps:true});


module.exports = mongoose.model("signup", SignUpSchema);
