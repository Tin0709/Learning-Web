document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ctaButton");

  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked! Enjoy exploring the site.");
    });
  }
});
