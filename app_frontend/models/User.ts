import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  isEmailVerified?: boolean;
  provider: "google" | "email" | "github";
  googleId?: string;
  githubId?: string;
  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  provider: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  githubId: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
