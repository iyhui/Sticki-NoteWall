import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateNote(props) {


    const [expandVal, setExpand] = useState(false);
    
    const [note, changeNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;


    changeNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    props.onAdd(note);
    changeNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expandVal && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder={expandVal ? "Content" : "Make a note"}
          rows={expandVal ? 3 : 1}
        />
        <Zoom in={expandVal}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
