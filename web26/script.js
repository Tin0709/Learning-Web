const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

//Set default markdown
input.value = `# Hello Markdown!
## Subheading
- List item
**Bold text**
[Link](https://example.com)
\`\`\`js
console.log("code block");
\`\`\`
`;

const updatePreview = () => {
  preview.innerHTML = marked.parse(input.value);
};

input.addEventListener("input", updatePreview);

// Initial render
updatePreview();
