import React, { useState } from "react";
import { connect } from "react-redux";
import { editBook } from "../../redux/actions/bookActions";

const EditBookPopup = ({ book, editBook, onClose }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(editedBook);
    onClose();
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={editedBook.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            value={editedBook.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={editedBook.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={editedBook.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  editBook,
};

export default connect(null, mapDispatchToProps)(EditBookPopup);
