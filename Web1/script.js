function changeText(event) {
  event.stopPropagation(); // Still prevent bubble, just in case
  document.getElementById("description").innerText = "Thanks for clicking!";
}

function resetPage() {
  location.reload();
}
