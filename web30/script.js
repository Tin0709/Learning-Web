document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-content");

  if (postContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    fetch(`posts/post${postId}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      })
      .then((post) => {
        postContainer.innerHTML = `
            <div class="post-hero">
              <img src="${post.image}" alt="${post.title}">
            </div>
            <h2>${post.title}</h2>
            <div class="post-body">${post.content}</div>
          `;
      })
      .catch(() => {
        postContainer.innerHTML =
          "<p style='text-align:center;'>Post not found.</p>";
      });
  }
});
