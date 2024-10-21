const mongoose = require("mongoose");

const emailSchema = mongoose.Schema(
  {
    Name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      // match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Validates email format
    },
    subject: {
      type: String,
      required: true,
      minlength: 3, // Minimum length for the subject
    },
    message: {
      type: String,
      required: true,
      // minlength: 10,  // Minimum length for the message
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
  }
);

module.exports = mongoose.model("Email", emailSchema);
