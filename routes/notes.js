import express from "express";
import {
  getNotes,
  createNote,
  deleteNote,
  getSingleNote,
  updateNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

//TODO in the future
router.get("/:id", getSingleNote);

router.patch("/:id", updateNote);
export default router;
