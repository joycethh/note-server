import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
