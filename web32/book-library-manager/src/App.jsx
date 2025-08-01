import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BookProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
