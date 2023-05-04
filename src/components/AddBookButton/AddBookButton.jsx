import React from "react";

const AddBookButton = ({ onAdd }) => {
  const handleClick = () => {
    onAdd();
  };

  return <button onClick={handleClick}>Add Book</button>;
};

export default AddBookButton;
