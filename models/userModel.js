import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      default: NaN,
    },
    lastname: {
      type: String,
      required: true,
      default: NaN,
    },
    phone: {
      type: String,
      required: true,
      default: NaN,
    },
    postcode: {
      type: String,
      required: true,
      default: NaN,
    },
    state: {
      type: String,
      required: true,
      default: NaN,
    },
    area: {
      type: String,
      required: true,
      default: NaN,
    },
    country: {
      type: String,
      required: true,
      default: NaN,
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "blogs",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
