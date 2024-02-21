"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Tasks from "./components/Task";

type TaskType = {
  body: string;
  order: number;
  done: boolean;
  id: string;
}

export default function App() {
  const [allTaskGroups, setAllTaskGroups] = useState(localStorage.getItem("localnotes"));
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState(localStorage.getItem("localnotes"));

  useEffect(() => {
    if (!localStorage.getItem("localnotes")) {
      localStorage.setItem("localnotes", JSON.stringify([]));
    }
  }
  , []);

  async function addtolocalstorage(e: React.FormEvent<HTMLFormElement>) {    
    e.preventDefault();

    const allNotes = JSON.parse(notes!);

    const note = {
      "body": newNote,
      "order": allNotes.length + 1,
      "done": false,
      "id": uuidv4()
    }

    const tg = {
      "title": newNote,
      "order": JSON.parse(allTaskGroups!).length + 1,
      "tasks": [note],
      "tg_id": uuidv4()
    }

    const allNewNotes = [ ...allNotes, note ];

    const allNewTaskGroups = [ ...JSON.parse(allTaskGroups!), tg ];

    console.log(allNewTaskGroups);
    
    // add to local storage
    localStorage.setItem("localnotes", JSON.stringify(allNewTaskGroups));
    setNotes(localStorage.getItem("localnotes"));
  }

  return (
    <main className="max-h-screen max-w-screen">
      <div><h2>welcome to localnotes</h2></div>
      <div>
        <form onSubmit={addtolocalstorage}>
          <textarea
            name="newNote"
            id="newNote"
            required
            value={newNote}
            onChange={(e) => {
              setNewNote(e.target.value);
            }}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
      
      <div className="bg-red-500">
        {JSON.parse(notes!).map((note: any) => 
          <div key={uuidv4()}>
            <div>{`${note.body}`}</div>
            <div>{note.order}</div>
          </div>
        )}
      </div>

      <div>
        {JSON.parse(allTaskGroups!).map((tg: any) => 
        <div key={uuidv4()}>
          <Tasks tasks={JSON.stringify(tg.tasks)} />
        </div>
        )}
      </div>
    </main>
  );
}