import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Board = new Schema({
  test: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Comments`,
    },
  ],
});

export default mongoose.model(`Board`, Board, `Board`);
