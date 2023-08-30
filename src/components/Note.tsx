import React from "react";

const Note: React.FC<{ localkey: string }> = ({ localkey, setItems }) => {

  function deleteNote(e:Event) {
    e.preventDefault();
    // remove item from local storage with key = localkey
    localStorage.removeItem(localkey);
    console.log(localStorage.getItem(e.target?.note.value), "deleted");
    setItems({ ...localStorage });
  }

  return (
    <>
      <div>{localStorage.getItem(localkey)}</div>
      <form onSubmit={deleteNote}>
      <input type="text" name="note" id="note" defaultValue={localkey} hidden/>
      <button type="submit">dlt</button>
      </form>
    </>
  );
};

export default Note;
