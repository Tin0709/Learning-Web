import BookList from "../components/BookList";
import { useBooks } from "../context/BookContext";

export default function Home() {
  const { books } = useBooks();

  return (
    <div className="container">
      <h2>Your Book Library</h2>
      {books.length === 0 ? (
        <div className="empty-state">
          No books yet. Click <strong>"Add Book"</strong> to get started!
        </div>
      ) : (
        <BookList />
      )}
    </div>
  );
}
