const ship = document.getElementById("ship");
const scoreBoard = document.getElementById("score");
let score = 0;

function randomPosition() {
  const container = document.getElementById("game-container");
  const maxX = container.clientWidth - ship.offsetWidth;
  const maxY = container.clientHeight - ship.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  ship.style.left = `${x}px`;
  ship.style.top = `${y}px`;
}

ship.addEventListener("click", () => {
  score++;
  scoreBoard.textContent = `Score: ${score}`;
  ship.style.transform = "scale(1.2)";
  setTimeout(() => {
    ship.style.transform = "scale(1)";
    randomPosition();
  }, 100);
});

window.onload = () => {
  randomPosition();
};
