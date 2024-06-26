import styles from "../styles/Note.module.css";
import StyleUtils from "../styles/utils.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import { MdDelete } from "react-icons/md";

interface NotesProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note, className }: NotesProps) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={StyleUtils.flexCenter}>
          {title} <MdDelete className="text-muted ms-auto" />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdAt}</Card.Footer>
    </Card>
  );
};

export default Note;
