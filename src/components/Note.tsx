import React, { useEffect, useState } from "react";

const Note: React.FC<{ text: string }> = ({ text }) => {
  const [note, setNote] = useState<string>(text);

  useEffect(() => {
    setNote(text);
  }, []);

  return (
    <>
      <div>{note}</div>
    </>
  );
};

export default Note;
