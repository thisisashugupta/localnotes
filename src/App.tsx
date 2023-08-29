import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const [items, setItems] = useState("cooking");

  useEffect(() => {
    localStorage.setItem("items-1234", JSON.stringify(items));
  }, [items]);

  const addtolocalstorage = async () => {
    console.log(newNote);
    // add to local storage
    setNotes((notes) => [...notes, newNote]);
    setNewNote("");
  };

  return (
    <>
      <div>Title Header</div>
      <div>
        <input
          type="text"
          name="newNote"
          id="newNote"
          onChange={(e) => {
            setNewNote(e.target.value);
          }}
        />
        <button type="submit" onClick={addtolocalstorage}>
          Add Note
        </button>
      </div>
      <div className="card">
        <div>
          {notes.map((note, index) => (
            <div key={index}>
              <Note text={note} />
            </div>
          ))}
        </div>

        <Note text={"some random text"} />
      </div>
    </>
  );
}

export default App;
