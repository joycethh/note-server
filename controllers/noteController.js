import express from "express";
import mongoose from "mongoose";
import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });

  try {
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No such note with this id: ${id}`);

  const seletedNote = await Note.findByIdAndDelete({ _id: id });
  if (seletedNote) {
    res.status(200).json({ mssg: "The seleted note is deleted successfully" });
  }
  if (!seletedNote) {
    res.status(400).json({ mssg: "Coudln't find note with the id" });
  }
};

//TODO in the future
export const getSingleNote = async (req, res) => {
  const { id } = req.params;
  try {
    const seletedNote = await Note.findById({ _id: id });
    res.status(200).json(seletedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedNote = { _id: id, title, content };
  console.log(updatedNote);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No such note with this id: ${id}`);

  await Note.findByIdAndUpdate({ _id: id }, updatedNote, { new: true });
  res.status(200).json({ mssg: "The note is updated successfully" });
};
