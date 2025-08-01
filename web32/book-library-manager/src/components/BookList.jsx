import { useBooks } from "../context/BookContext";
import BookCard from "./BookCard";

export default function BookList() {
  const { books } = useBooks();

  if (books.length === 0) return <p>No books yet.</p>;

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
