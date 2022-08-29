import express from "express";
import mongoose from "mongoose";

import Note from "../models/noteModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("get all notes route");
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.delete("/", (req, res) => {
  res.json("DELETE ");
});

//TODO in the future
router.get("/:id", (req, res) => {
  res.json("get singe one ");
});

router.patch("/:id", (req, res) => {
  res.json("update one ");
});
export default router;
