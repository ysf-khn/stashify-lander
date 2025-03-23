import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);
