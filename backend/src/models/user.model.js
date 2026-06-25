import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String, // bcrypt hashed password
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String, // cloudinary url
      default: "",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
