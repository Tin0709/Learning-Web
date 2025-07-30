document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-content");
  if (postContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    fetch(`posts/post${postId}.json`)
      .then((response) => response.json())
      .then((post) => {
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <div>${post.content}</div>
          `;
      })
      .catch((err) => {
        postContainer.innerHTML = "<p>Post not found.</p>";
      });
  }
});
