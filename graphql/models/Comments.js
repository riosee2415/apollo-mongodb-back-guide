import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comments = new Schema({
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model(`Comments`, Comments, `Comments`);
