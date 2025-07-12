import React from "react";
import { marked } from "marked";

function MarkdownPreview({ markdown }) {
  const getMarkdownText = () => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div className="preview">
      <h2>Preview</h2>
      <div
        className="preview-content"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default MarkdownPreview;
