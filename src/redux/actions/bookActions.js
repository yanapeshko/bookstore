import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../constants/types";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
});
