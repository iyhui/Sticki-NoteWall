import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteGroup, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteGroup, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteGroup.title}
            content={noteGroup.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
