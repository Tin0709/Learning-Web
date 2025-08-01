import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";
import { v4 as uuidv4 } from "uuid";

export default function BookForm() {
  const { addBook } = useBooks();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    status: "Unread",
    rating: 0,
    notes: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ ...form, id: uuidv4() });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Book Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        required
      />
      <input
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Unread">Unread</option>
        <option value="Read">Read</option>
      </select>
      <textarea
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
