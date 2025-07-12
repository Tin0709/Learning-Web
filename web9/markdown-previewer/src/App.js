import "./App.css";
import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to the Markdown Previewer!

    Type some *Markdown* on the left.
    
    - Lists
    - **Bold text**
    - [Links](https://reactjs.org)
      `);
  return (
    <div className="app-container">
      <MarkdownEditor value={markdown} onChange={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export default App;
