const board = document.getElementById("board");
const resetBtn = document.getElementById("resetBtn");
const undoBtn = document.getElementById("undoBtn");
const colorBtn = document.getElementById("colorBtn");
const colorModal = document.getElementById("colorModal");
const player1ColorPicker = document.getElementById("player1ColorPicker");
const player2ColorPicker = document.getElementById("player2ColorPicker");
const saveColorsBtn = document.getElementById("saveColorsBtn");
const cancelColorsBtn = document.getElementById("cancelColorsBtn");
const winnerOverlay = document.getElementById("winnerOverlay");
const fireworksCanvas = document.getElementById("fireworksCanvas");

// Scoreboard elements
const player1ScoreEl = document.getElementById("player1Score");
const player2ScoreEl = document.getElementById("player2Score");

const BOARD_SIZE = 3;
let startingPlayer = 1; // Track who starts next game
let currentPlayer = startingPlayer;
let moves = [];
let gameOver = false;
let scores = { 1: 0, 2: 0 }; // Track wins

let playerColors = {
  1: "#FF4136",
  2: "#0074D9",
};

function updateCSSVariables() {
  document.documentElement.style.setProperty("--player1-color", playerColors[1]);
  document.documentElement.style.setProperty("--player2-color", playerColors[2]);
}

function updateScoreboard() {
  player1ScoreEl.textContent = `Player 1: ${scores[1]}`;
  player2ScoreEl.textContent = `Player 2: ${scores[2]}`;
}

function createBoard() {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 75px)`;
  board.style.gridTemplateRows = `repeat(${BOARD_SIZE}, 75px)`;

  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.addEventListener("click", handleDotClick);
    board.appendChild(dot);
  }
}

function handleDotClick(e) {
  if (gameOver) return;

  const dot = e.target;
  if (dot.classList.contains("player1") || dot.classList.contains("player2")) {
    return;
  }

  dot.classList.add(`player${currentPlayer}`);
  moves.push({ index: dot.dataset.index, player: currentPlayer });

  if (checkWin(currentPlayer)) {
    scores[currentPlayer]++; // Update score
    updateScoreboard();
    showWinner(currentPlayer);
    gameOver = true;
    return;
  }

  if (moves.length === BOARD_SIZE * BOARD_SIZE) {
    showDraw();
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function checkWin(player) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some(pattern =>
    pattern.every(index =>
      board.querySelector(`.dot[data-index='${index}']`).classList.contains(`player${player}`)
    )
  );
}

function showWinner(player) {
  winnerOverlay.textContent = `🎉 Congratulations Player ${player}! 🎉`;
  winnerOverlay.classList.remove("hidden", "fade-out");
  startFireworks();

  // Alternate starting player for next game
  startingPlayer = startingPlayer === 1 ? 2 : 1;

  setTimeout(() => {
    winnerOverlay.classList.add("fade-out");
    setTimeout(() => {
      winnerOverlay.classList.add("hidden");
      stopFireworks();
    }, 500);
  }, 1000);
}

function showDraw() {
  winnerOverlay.textContent = "🤝 It's a draw! No winner this time.";
  winnerOverlay.classList.remove("hidden", "fade-out");

  // Alternate starting player for next game
  startingPlayer = startingPlayer === 1 ? 2 : 1;

  setTimeout(() => {
    winnerOverlay.classList.add("fade-out");
    setTimeout(() => {
      winnerOverlay.classList.add("hidden");
    }, 500);
  }, 1000);
}

function undoMove() {
  if (moves.length === 0 || gameOver) return;

  const lastMove = moves.pop();
  const dot = board.querySelector(`.dot[data-index='${lastMove.index}']`);
  if (dot) {
    dot.classList.remove("player1", "player2");
  }
  currentPlayer = lastMove.player;
}

function resetBoard() {
  moves = [];
  currentPlayer = startingPlayer; // Use alternating starter
  gameOver = false;
  const dots = board.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("player1", "player2"));
  winnerOverlay.classList.add("hidden");
  stopFireworks();
}

function openColorModal() {
  player1ColorPicker.value = playerColors[1];
  player2ColorPicker.value = playerColors[2];
  colorModal.classList.remove("hidden");
}

function closeColorModal() {
  colorModal.classList.add("hidden");
}

function saveColors() {
  playerColors[1] = player1ColorPicker.value;
  playerColors[2] = player2ColorPicker.value;
  updateCSSVariables();
  closeColorModal();
}

/* Fireworks Animation */
let fwCtx = fireworksCanvas.getContext("2d");
let particles = [];
function startFireworks() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
  particles = [];
  createFirework();
  requestAnimationFrame(updateFireworks);
}

function stopFireworks() {
  particles = [];
  fwCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
}

function createFirework() {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: fireworksCanvas.width / 2,
      y: fireworksCanvas.height / 2,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 5 + 2,
      radius: Math.random() * 2 + 1,
      life: 100,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }
}

function updateFireworks() {
  fwCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    fwCtx.beginPath();
    fwCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    fwCtx.fillStyle = p.color;
    fwCtx.fill();
  });
  particles = particles.filter(p => p.life > 0);
  if (particles.length > 0) {
    requestAnimationFrame(updateFireworks);
  }
}

resetBtn.addEventListener("click", resetBoard);
undoBtn.addEventListener("click", undoMove);
colorBtn.addEventListener("click", openColorModal);
saveColorsBtn.addEventListener("click", saveColors);
cancelColorsBtn.addEventListener("click", closeColorModal);

updateCSSVariables();
updateScoreboard();
createBoard();