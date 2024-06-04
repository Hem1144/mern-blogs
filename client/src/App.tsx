import React, { useEffect, useState } from "react";
import styles from "./styles/NotesPage.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Note as NoteModel } from "./models/note";
import axios from "axios";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        //! alternative way to get notes
        // const reponse = await fetch("/api/notes", {
        //   method: "GET",
        // });
        // const notes = await reponse.json();

        const notes = (await axios.get("/api/notes")).data;
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
      <Row xs={1} md={2} lg={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
