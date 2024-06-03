import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";

interface NotesProps {
  note: NoteModel;
}

const Note = ({ note }: NotesProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Note;
