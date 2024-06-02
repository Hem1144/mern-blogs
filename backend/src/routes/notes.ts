import * as NoteController from "../controllers/notes";
import express from "express";

const router = express.Router();

router.get("/", NoteController.getNotes);
router.get("/:noteId", NoteController.getNote);
router.post("/", NoteController.createNote);

export default router;
