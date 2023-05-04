import React from "react";
import { connect } from "react-redux";
import BookList from "../BookList/BookList";
import AddBookButton from "../AddBookButton/AddBookButton";
import AddBookPopup from "../AddBookPopup/AddBookPopup";
import EditBookPopup from "../EditBookPopup/EditBookPopup";
import { deleteBook } from "../../redux/actions/bookActions";

const App = ({ books, deleteBook }) => {
  const [addPopupOpen, setAddPopupOpen] = React.useState(false);
  const [editPopupOpen, setEditPopupOpen] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState(null);

  const handleDelete = (id) => {
    deleteBook(id);
  };

  const handleAdd = () => {
    setAddPopupOpen(true);
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setEditPopupOpen(true);
  };

  const handleAddClose = () => {
    setAddPopupOpen(false);
  };

  const handleEditClose = () => {
    setSelectedBook(null);
    setEditPopupOpen(false);
  };

  return (
    <div>
      <h1>My Book List</h1>
      <AddBookButton onAdd={handleAdd} />
      <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />

      {addPopupOpen && <AddBookPopup onClose={handleAddClose} />}
      {editPopupOpen && selectedBook && (
        <EditBookPopup book={selectedBook} onClose={handleEditClose} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = {
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
