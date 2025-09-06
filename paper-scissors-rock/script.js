const player1Section = document.getElementById('player1');
const player2Section = document.getElementById('player2');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
const revealBtn = document.getElementById('reveal-btn');

const scoreP1Span = document.getElementById('score-p1');
const scoreP2Span = document.getElementById('score-p2');
const scoreTieSpan = document.getElementById('score-tie');

const winnerOverlay = document.getElementById("winnerOverlay");
const fireworksCanvas = document.getElementById("fireworksCanvas");
const fwCtx = fireworksCanvas.getContext("2d");

let player1Choice = null;
let player2Choice = null;

let scoreP1 = 0;
let scoreP2 = 0;
let scoreTie = 0;

const choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const player = button.getAttribute('data-player');
    const choice = button.getAttribute('data-choice');

    if (player === '1') {
      player1Choice = choice;
      player1Section.style.display = 'none';
      player2Section.style.display = 'block';
      resultDiv.textContent = "Player 2, it's your turn!";
    } else if (player === '2') {
      player2Choice = choice;
      player2Section.style.display = 'none';
      revealBtn.style.display = 'block';
      resultDiv.textContent = "Both players have chosen. Press Reveal Winner.";
    }
  });
});

revealBtn.addEventListener('click', () => {
  revealBtn.disabled = true;
  revealBtn.style.display = 'none';

  const countdownEmojis = [
    "✊ Rock",
    "✋ Paper",
    "✌️ Scissors"
  ];

  let count = 0;
  resultDiv.innerHTML = `<span class="countdown-step">${countdownEmojis[count]}</span>`;
  const span = resultDiv.querySelector('.countdown-step');
  span.classList.add('hammer');

  const interval = setInterval(() => {
    count++;
    if (count < countdownEmojis.length) {
      resultDiv.innerHTML = `<span class="countdown-step">${countdownEmojis[count]}</span>`;
      const span = resultDiv.querySelector('.countdown-step');
      span.classList.remove('hammer');
      void span.offsetWidth; // Trigger reflow to restart animation
      span.classList.add('hammer');
    } else {
      clearInterval(interval);
      showResult();
      revealBtn.disabled = false;
    }
  }, 600);  // slightly longer so animation finishes
});

resetBtn.addEventListener('click', () => {
  player1Choice = null;
  player2Choice = null;
  resultDiv.textContent = '';
  resetBtn.style.display = 'none';
  revealBtn.style.display = 'none';
  revealBtn.disabled = false;
  player1Section.style.display = 'block';
  player2Section.style.display = 'none';

  // If you want to reset scores on reset, uncomment these:
  // scoreP1 = 0;
  // scoreP2 = 0;
  // scoreTie = 0;
  // updateScoreboard();
});

// Game logic helpers
function getWinner(p1, p2) {
  if (p1 === p2) return 0;

  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 1;
  } else {
    return 2;
  }
}

function choiceToEmoji(choice) {
  switch(choice) {
    case 'rock': return '✊ Rock';
    case 'paper': return '✋ Paper';
    case 'scissors': return '✌️ Scissors';
    default: return '';
  }
}

// Fireworks animation state
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

// Show winner overlay and start fireworks
function showWinnerOverlay(text) {
  winnerOverlay.textContent = text;
  winnerOverlay.classList.remove("hidden", "fade-out");
  startFireworks();

  setTimeout(() => {
    winnerOverlay.classList.add("fade-out");
    setTimeout(() => {
      winnerOverlay.classList.add("hidden");
      stopFireworks();
    }, 500);
  }, 1500);
}

// Show game result and trigger overlay if player won
function showResult() {
  const winner = getWinner(player1Choice, player2Choice);

  const p1Text = choiceToEmoji(player1Choice);
  const p2Text = choiceToEmoji(player2Choice);

  if (winner === 0) {
    resultDiv.textContent = `It's a tie! Both chose ${p1Text}.`;
    scoreTie++;
  } else if (winner === 1) {
    resultDiv.innerHTML = `Player 1 chose ${p1Text}.<br>Player 2 chose ${p2Text}.<br><strong>Player 1 wins!</strong>`;
    scoreP1++;
    showWinnerOverlay(`🎉 Congratulations Player 1! 🎉`);
  } else if (winner === 2) {
    resultDiv.innerHTML = `Player 1 chose ${p1Text}.<br>Player 2 chose ${p2Text}.<br><strong>Player 2 wins!</strong>`;
    scoreP2++;
    showWinnerOverlay(`🎉 Congratulations Player 2! 🎉`);
  }

  updateScoreboard();
  resetBtn.style.display = 'block';
}

function updateScoreboard() {
  scoreP1Span.textContent = scoreP1;
  scoreP2Span.textContent = scoreP2;
  scoreTieSpan.textContent = scoreTie;
}

