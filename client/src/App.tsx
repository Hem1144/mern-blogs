import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
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
    <div className="App">
      {notes.map((note) => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;
