import React from "react";

const BookList = ({ books, onDelete, onEdit }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (book) => {
    onEdit(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td onClick={() => handleEdit(book)}>{book.name}</td>
            <td>{book.price}</td>
            <td>{book.category}</td>
            <td>{book.description}</td>
            <td>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
