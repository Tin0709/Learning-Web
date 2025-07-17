// Ripple effect
document.querySelectorAll(".btn-ripple").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});
