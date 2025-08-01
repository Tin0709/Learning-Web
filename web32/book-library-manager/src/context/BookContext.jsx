import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks((prev) => [...prev, book]);
  const deleteBook = (id) =>
    setBooks((prev) => prev.filter((b) => b.id !== id));
  const updateBook = (updated) =>
    setBooks((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
