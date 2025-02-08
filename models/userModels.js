import mongoose from "mongoose";

// Schema creation
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Ensures email is stored in lowercase
      trim: true,
    },
    age: {
      type: Number,
      min: 0, // Ensures age is not negative
    },
  },
  { timestamps: true }
);

// Create model (capitalized)
const User = mongoose.model("User", userSchema);

// Export model
export default User;
