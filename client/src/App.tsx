import React, { useEffect, useState } from "react";
import styles from "./styles/NotesPage.module.css";
import styleUtils from "./styles/utils.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Note as NoteModel } from "./models/note";
// import axios from "axios";
import Note from "./components/Note";
import * as NoteApi from "./network/notes_api";
import AddNoteAialog from "./components/AddNoteDialog";
import AddNoteDialog from "./components/AddNoteDialog";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

  useEffect(() => {
    async function loadNotes() {
      try {
        //! alternative way to get notes
        // const notes = (await axios.get("/api/notes")).data;

        const notes = await NoteApi.fetchNote();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);
  return (
    <Container>
      <Button
        onClick={() => setShowAddNoteDialog(true)}
        className={`mb-4 ${styleUtils.blockCenter}`}
      >
        {" "}
        Add new Note
      </Button>
      <Row xs={1} md={2} lg={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
      {showAddNoteDialog && (
        <AddNoteDialog
          onDismiss={() => setShowAddNoteDialog(false)}
          onNoteSaved={(newNote) => {
            setNotes([...notes, newNote]);
            setShowAddNoteDialog(false);
          }}
        />
      )}
    </Container>
  );
}

export default App;
