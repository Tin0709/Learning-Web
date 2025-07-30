document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-content");

  const posts = {
    1: {
      title: "First Blog Post",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TpyCZNlWjqIeVnoFppDXGuVYcqSirzfqeuhfl3hBoetVdQxjI3UlmnaQ7mMDFbHjAoA&usqp=CAU",
      content: `
          <p>Welcome to my first blog post! This is an example of how you can write engaging content here.</p>
          <p>In this post, we'll talk about how to build a simple blog website using HTML, CSS, and JavaScript.</p>
          <p><strong>Tip:</strong> You can include <em>HTML</em> tags like <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to style your text.</p>
        `,
    },
    2: {
      title: "Second Blog Post",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_noRf6pv_lrdQQC7os1xDjRTkwTzrmzQn3A&s",
      content: `
          <p>This is my second post, where I dive deeper into JavaScript!</p>
          <p>We’ll explore functions, objects, and events in JavaScript.</p>
          <p>Stay tuned for more tips and tricks.</p>
        `,
    },
  };

  if (postContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    const post = posts[postId];

    if (post) {
      postContainer.innerHTML = `
          <div class="post-hero">
            <img src="${post.image}" alt="${post.title}">
          </div>
          <h2>${post.title}</h2>
          <div class="post-body">${post.content}</div>
        `;
    } else {
      postContainer.innerHTML =
        "<p style='text-align:center;'>Post not found.</p>";
    }
  }
});
