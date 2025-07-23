const express = require("express");
const app = express();
const PORT = 3000;

let notes = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/notes", (req, res) => {
  res.render("notes", { notes });
});

app.post("/notes", (req, res) => {
  const newNote = req.body.note;
  if (newNote) {
    notes.push(newNote);
  }
  res.redirect("/notes");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
