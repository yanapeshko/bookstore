import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../constants/types";

const initialState = {
  books: [
    {
      id: 1,
      name: "Book 1",
      price: 10,
      category: "Category 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Book 2",
      price: 20,
      category: "Category 2",
      description: "Description 2",
    },
  ],
};

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return {
//         ...state,
//         books: [
//           ...state.books,
//           { ...action.payload, id: state.books.length + 1 },
//         ],
//       };
//     case EDIT_BOOK:
//       return {
//         ...state,
//         books: state.books.map((book) =>
//           book.id === action.payload.id ? { ...book, ...action.payload } : book
//         ),
//       };
//     case DELETE_BOOK:
//       return {
//         ...state,
//         books: state.books.filter((book) => book.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

// export default bookReducer;

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          { ...action.payload, id: state.books.length + 1 },
        ],
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
      };
    case DELETE_BOOK:
      const filteredList = state.books.filter((book) => {
        return book.id !== action.payload;
      });
      return {
        ...state,
        books: filteredList,
      };
    default:
      return state;
  }
};
export default bookReducer;
