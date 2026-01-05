const game = document.getElementById("game");
const statusText = document.getElementById("status");
const thinkingDiv = document.getElementById("thinking");
const difficultySelect = document.getElementById("difficulty");

const HUMAN = "X";
const AI = "O";

let board = Array(9).fill("");
let aiThinking = false;
let thinkingInterval;
let frameIndex = 0;

// 🔹 ADD YOUR IMAGE PATHS HERE
const thinkingFrames = [
  "thinking/think1.png",
  "thinking/think2.png",
  "thinking/think3.png",
  "thinking/think4.png",
  "thinking/think5.png",
  "thinking/think6.png"
];

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// ---------- GAME LOGIC ----------

function checkWinner(b) {
  for (let w of wins) {
    const [a,b1,c] = w;
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
      return b[a];
    }
  }
  return b.includes("") ? null : "draw";
}

function render() {
  game.innerHTML = "";
  board.forEach((cell, i) => {
    const btn = document.createElement("button");
    btn.className = "cell";
    btn.textContent = cell;
    btn.disabled = aiThinking || cell !== "" || checkWinner(board);
    btn.onclick = () => humanMove(i);
    game.appendChild(btn);
  });
}

function updateStatus() {
  const winner = checkWinner(board);

  if (winner === HUMAN) statusText.textContent = "You win";
  else if (winner === AI) statusText.textContent = "Ai wins";
  else if (winner === "draw") statusText.textContent = "Draw";
  else statusText.textContent = "Your turn (X)";
}

// ---------- HUMAN MOVE ----------

function humanMove(i) {
  if (board[i] || aiThinking || checkWinner(board)) return;

  board[i] = HUMAN;
  render();
  updateStatus();

  if (!checkWinner(board)) {
    aiThinking = true;
    startThinking();

    setTimeout(() => {
      stopThinking();
      aiMove();
      aiThinking = false;
      render();
      updateStatus();
    }, 3000);
  }
}

// ---------- AI MOVE ----------

function aiMove() {
  let move;
  let difficulty = difficultySelect.value;

  if (difficulty !== "impossible" && Math.random() < mistakeChance(difficulty)) {
    move = randomMove();
  } else {
    move = bestMove();
  }

  board[move] = AI;
}

function mistakeChance(level) {
  if (level === "easy") return 0.7;
  if (level === "medium") return 0.4;
  if (level === "hard") return 0.15;
  return 0;
}

function randomMove() {
  let empty = board
    .map((v, i) => v === "" ? i : null)
    .filter(v => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

// ---------- MINIMAX ----------

function bestMove() {
  let bestScore = -Infinity;
  let move;

  board.forEach((cell, i) => {
    if (cell === "") {
      board[i] = AI;
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  });

  return move;
}

function minimax(b, depth, isMax) {
  const result = checkWinner(b);

  if (result === AI) return 10 - depth;
  if (result === HUMAN) return depth - 10;
  if (result === "draw") return 0;

  if (isMax) {
    let best = -Infinity;
    b.forEach((cell, i) => {
      if (cell === "") {
        b[i] = AI;
        best = Math.max(best, minimax(b, depth + 1, false));
        b[i] = "";
      }
    });
    return best;
  } else {
    let best = Infinity;
    b.forEach((cell, i) => {
      if (cell === "") {
        b[i] = HUMAN;
        best = Math.min(best, minimax(b, depth + 1, true));
        b[i] = "";
      }
    });
    return best;
  }
}

// ---------- IMAGE THINKING ANIMATION ----------

function startThinking() {
  thinkingDiv.innerHTML = `<img src="${thinkingFrames[0]}" />`;
  frameIndex = 0;

  thinkingInterval = setInterval(() => {
    frameIndex = (frameIndex + 1) % thinkingFrames.length;
    thinkingDiv.innerHTML =
      `<img src="${thinkingFrames[frameIndex]}" />`;
  }, 400);

  statusText.textContent = "AI thinking...";
}

function stopThinking() {
  clearInterval(thinkingInterval);
  thinkingDiv.innerHTML = "";
}

// ---------- START ----------
render();