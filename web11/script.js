const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // size of each square
const canvasSize = 400;

let snake = [{ x: 160, y: 160 }];
let direction = "RIGHT";
let food = spawnFood();
let score = 0;

function spawnFood() {
  return {
    x: Math.floor(Math.random() * (canvasSize / box)) * box,
    y: Math.floor(Math.random() * (canvasSize / box)) * box,
  };
}

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  const key = e.key;

  if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let part of snake) {
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(part.x, part.y, box, box);
  }

  // Draw food
  ctx.fillStyle = "#FF0033";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  let head = { ...snake[0] };
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  // Game over (wall or self)
  if (
    head.x < 0 ||
    head.x >= canvasSize ||
    head.y < 0 ||
    head.y >= canvasSize ||
    snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    alert("Game Over! Final Score: " + score);
    snake = [{ x: 160, y: 160 }];
    direction = "RIGHT";
    score = 0;
    food = spawnFood();
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = spawnFood();
    score++;
    document.getElementById("score").textContent = "Score: " + score;
  } else {
    snake.pop(); // Remove tail
  }
}

setInterval(draw, 100);
