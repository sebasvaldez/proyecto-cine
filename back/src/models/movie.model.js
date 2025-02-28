import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    synopsis: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: Array,
      required: true,
      trim: true,
    },
    cast: {
      type: Array,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    coverUrl: {
      type: String,
      required: true,
      trim: true,
    },
    trailerUrl: {
      type: String,
      required: true,
      trim: true,
    },
    onBillboard:{
      type: Boolean,
      required: true,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movie", movieSchema);
