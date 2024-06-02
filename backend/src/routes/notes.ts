import * as NoteController from "../controllers/notes";
import express from "express";

const router = express.Router();

router.get("/", NoteController.getNotes);

export default router;
