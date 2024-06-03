import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";

interface NotesProps {
  note: NoteModel;
}

const Note = ({ note }: NotesProps) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
