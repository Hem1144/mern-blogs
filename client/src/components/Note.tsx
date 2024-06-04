import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import app from "../../../backend/src/app";

interface NotesProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note, className }: NotesProps) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdAt}</Card.Footer>
    </Card>
  );
};

export default Note;
