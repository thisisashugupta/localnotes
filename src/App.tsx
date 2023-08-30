import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [localkey, setLocalKey] = useState(uuidv4());
  const [newNote, setNewNote] = useState("");
  const [items, setItems] = useState({ ...localStorage });
  const [allKeys, setAllKeys] = useState<(string | null)[]>(Object.keys(localStorage));

/*
    let i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
     return keys;
*/

  useEffect(() => {
      setAllKeys(Object.keys(localStorage));
  }, [items]);

  async function addtolocalstorage(e:Event) {    
    e.preventDefault();
    console.log(newNote," added");
    // add to local storage
    localStorage.setItem(localkey, newNote);
    setItems({ ...localStorage });
    setNewNote("");
    setLocalKey(uuidv4());
  }

  return (
    <>
      <div><h2>welcome to localnotes</h2></div>
      <div>
        <form onSubmit={addtolocalstorage}>
          <input
            type="text"
            name="newNote"
            id="newNote"
            required
            onChange={(e) => {
              setNewNote(e.target.value);
            }}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <p>// show notes //</p>
      <div className="card">
        <div>
          {
            allKeys.map(
              (localkey, index) => (
                <div key={index}>
                  <Note localkey={localkey} setItems={setItems}/>
                </div>
              )
            )
          }
        </div>
      </div>
    </>
  );
}