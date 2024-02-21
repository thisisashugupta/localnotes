import React from "react";

const Tasks = ({ tasks } : { tasks: string }) => {

  let tasksJSON;
  if(tasks !== "") {
    tasksJSON = JSON.parse(tasks);
  }

  const deleteNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // remove item from local storage with key = localkey
    // localStorage.removeItem(localkey);
    // console.log(localStorage.getItem(e.target?.note.value), "deleted");
    // setItems({ ...localStorage });
  }

  return (
    <>
      {false && 
        tasksJSON.map((taskObj:any) => {
          <div key={taskObj.id}>
            <div>{taskObj.body}</div>
            <div>delete btn</div>
          </div>
        })
      }
      <form onSubmit={deleteNote}>
      {/* <input type="text" name="note" id="note" defaultValue={localkey} hidden/> */}
      <button type="submit">dlt</button>
      </form>
    </>
  );
};

export default Tasks;
