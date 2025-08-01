import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to the Markdown Previewer!

Type Markdown on the left and see the HTML output on the right.

## Features:
- Live preview
- **Bold**, *Italic*, \`Code\`
- [Links](https://react.dev)
- Lists and more!
  `);

  const [showGuide, setShowGuide] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    document.documentElement.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>Markdown Previewer</h1>
        <div className="header-buttons">
          <button onClick={() => setShowGuide(!showGuide)}>
            {showGuide ? "Hide Guide" : "How to Use"}
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {showGuide && (
        <div className="guide-box">
          <h3>Markdown Syntax Guide</h3>
          <ul>
            <li>
              <code># Heading</code> → Heading
            </li>
            <li>
              <code>**bold**</code> → <b>bold</b>
            </li>
            <li>
              <code>*italic*</code> → <i>italic</i>
            </li>
            <li>
              <code>[text](url)</code> → Link
            </li>
            <li>
              <code>\`code\`</code> → <code>code</code>
            </li>
            <li>
              <code>- item</code> → List item
            </li>
          </ul>
        </div>
      )}

      <div className="editor-preview">
        <MarkdownEditor value={markdown} onChange={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
