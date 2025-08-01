import { useBooks } from "../context/BookContext";

export default function BookCard({ book }) {
  const { deleteBook } = useBooks();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{book.title}</h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Status:</strong> {book.status}
      </p>
      <p>
        <strong>Notes:</strong> {book.notes}
      </p>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
}
