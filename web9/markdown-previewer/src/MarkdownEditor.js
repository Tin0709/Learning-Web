import React from "react";

function MarkdownEditor({ value, onChange }) {
  return (
    <div className="editor">
      <h2>Markdown Input</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={20}
      />
    </div>
  );
}

export default MarkdownEditor;
