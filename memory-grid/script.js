const grid = document.getElementById('grid');
const startBtn = document.getElementById('startBtn');
const levelDisplay = document.getElementById('level');
const bestDisplay = document.getElementById('best');
const overlay = document.getElementById('overlay');
const livesDisplay = document.getElementById('lives');

let sequence = [];
let playerSequence = [];
let level = 0;
let best = 0;
let lives = 3;
let canClick = false;

const gridSize = 4;
const tiles = [];

// Create tiles
for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = i;
    tile.addEventListener('click', () => handleTileClick(i));
    grid.appendChild(tile);
    tiles.push(tile);
}

function startGame() {
    level = 1;
    lives = 3;
    updateLives();
    sequence = [];
    nextLevel(true); // start new level sequence
}

function nextLevel(isNewLevel = false) {
    levelDisplay.textContent = `Level: ${level}`;
    playerSequence = [];
    
    if (isNewLevel) {
        const nextTile = Math.floor(Math.random() * tiles.length);
        sequence.push(nextTile);
    }

    showSequence();
}

function showSequence() {
    canClick = false;
    let i = 0;
    const interval = setInterval(() => {
        if (i === sequence.length) {
            clearInterval(interval);
            canClick = true;
            return;
        }

        const currentTile = tiles[sequence[i]];
        currentTile.classList.add('pulse');

        // Remove pulse after animation
        setTimeout(() => currentTile.classList.remove('pulse'), 500);

        i++;
    }, 600);
}

function handleTileClick(index) {
    if (!canClick) return;
    playerSequence.push(index);

    const tile = tiles[index];
    tile.classList.add('active');
    setTimeout(() => tile.classList.remove('active'), 200);

    const currentStep = playerSequence.length - 1;
    if (playerSequence[currentStep] !== sequence[currentStep]) {
        loseLife();
        return;
    }

    if (playerSequence.length === sequence.length) {
        level++;
        setTimeout(() => nextLevel(true), 800); // advance to new level
    }
}

function loseLife() {
    lives--;
    updateLives();
    if (lives <= 0) {
        gameOver();
    } else {
        overlay.textContent = `Wrong! You have ${lives} lives left.`;
        overlay.style.display = 'block';
        setTimeout(() => overlay.style.display = 'none', 1500);
        playerSequence = [];
        showSequence(); // replay the current level sequence
    }
}

function gameOver() {
    if (level > best) {
        best = level;
        bestDisplay.textContent = `Best: ${best}`;
    }
    overlay.textContent = `Game Over! You reached level ${level}`;
    overlay.style.display = 'block';
    setTimeout(() => overlay.style.display = 'none', 2000);
    level = 0;
    levelDisplay.textContent = `Level: 0`;
    sequence = [];
    playerSequence = [];
    canClick = false;
}

function updateLives() {
    livesDisplay.textContent = "❤️".repeat(lives);
}

startBtn.addEventListener('click', startGame);