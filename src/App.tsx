import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const [items, setItems] = useState("cooking");

  // useEffect(() => {
  //   localStorage.setItem("items-1234", JSON.stringify(items));
  // }, [items]);

  const addtolocalstorage = async (e) => {
    e.preventDefault();
    console.log(newNote);
    // add to local storage
    setNotes((notes) => [...notes, newNote]);
    localStorage.setItem("items-1234", JSON.stringify(newNote));
    setNewNote("");
  };

  return (
    <>
      <div>Title Header</div>
      <div>
        <form onSubmit={addtolocalstorage}>
          <input
            type="text"
            name="newNote"
            id="newNote"
            onChange={(e) => {
              setNewNote(e.target.value);
            }}
          />
          <button type="submit">Add Note</button>
        </form>
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
