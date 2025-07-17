const grid = document.getElementById("grid");
const width = 10;
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0,
  0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const squares = [];

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    if (layout[i] === 1) {
      square.classList.add("wall");
    } else {
      square.classList.add("pac-dot");
    }
    grid.appendChild(square);
    squares.push(square);
  }
}
createBoard();

let pacmanCurrentIndex = 11;
squares[pacmanCurrentIndex].classList.add("pacman");

function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");

  switch (e.key) {
    case "ArrowLeft":
      if (
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains("wall")
      )
        pacmanCurrentIndex -= 1;
      break;

    case "ArrowRight":
      if (
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains("wall")
      )
        pacmanCurrentIndex += 1;
      break;

    case "ArrowUp":
      if (
        pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains("wall")
      )
        pacmanCurrentIndex -= width;
      break;

    case "ArrowDown":
      if (
        pacmanCurrentIndex + width < width * width &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall")
      )
        pacmanCurrentIndex += width;
      break;
  }

  squares[pacmanCurrentIndex].classList.add("pacman");

  // Eat dot
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
  }
}

document.addEventListener("keydown", movePacman);
