const posts = [
  {
    title: "My First Post",
    file: "posts/post1.md",
    date: "2025-08-01",
  },
  {
    title: "Learning JavaScript",
    file: "posts/post2.md",
    date: "2025-08-02",
  },
];

function loadPostList() {
  const list = document.getElementById("post-list");
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post-title";
    div.textContent = `${post.title} (${post.date})`;
    div.addEventListener("click", () => loadPostContent(post));
    list.appendChild(div);
  });
}

async function loadPostContent(post) {
  const res = await fetch(post.file);
  const text = await res.text();
  const content = document.getElementById("post-content");
  content.innerHTML = marked.parse(text); // using marked.js markdown parser
}

loadPostList();
