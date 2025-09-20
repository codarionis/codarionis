document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("gridContainer");
  const gridSizeSelect = document.getElementById("gridSize");
  const shapeTypeSelect = document.getElementById("shapeType");
  const resetBtn = document.getElementById("resetBtn");
  const circleSizeSelect = document.getElementById("circleSize");
  const gridSizeLabel = document.getElementById("gridSizeLabel");
  const circleSizeLabel = document.getElementById("circleSizeLabel");
  const colorPicker = document.getElementById("colorPicker");

  const posTopBtn = document.getElementById("posTop");
  const posMiddleBtn = document.getElementById("posMiddle");
  const posBottomBtn = document.getElementById("posBottom");

  const DOT_SIZE = 25;
  let currentColor = colorPicker.value;

  let undoStack = [];
  let redoStack = [];
  let dots = [];

  function createGrid(size, shape) {
    gridContainer.innerHTML = "";
    dots = [];

    if (shape === "square") {
      gridContainer.style.position = "relative";
      gridContainer.style.display = "grid";
      gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
      gridContainer.style.width = "auto";
      gridContainer.style.height = "auto";
      gridContainer.style.justifyContent = "start";
      gridContainer.style.padding = "15px";

      for (let i = 0; i < size * size; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot", shape);
        dot.dataset.index = i;
        dot.addEventListener("click", () => {
          toggleDotColor(i);
        });
        gridContainer.appendChild(dot);
        dots.push(dot);
      }
    } else if (shape === "circle") {
      const minContainerSize = 200;
      const maxContainerSize = 600;
      const rings = size;
      const clampedRings = Math.min(Math.max(rings, 3), 10);
      const containerSize = minContainerSize + ((clampedRings - 3) / (10 - 3)) * (maxContainerSize - minContainerSize);

      gridContainer.style.position = "relative";
      gridContainer.style.display = "block";
      gridContainer.style.width = `${containerSize}px`;
      gridContainer.style.height = `${containerSize}px`;
      gridContainer.style.gridTemplateColumns = "";
      gridContainer.style.justifyContent = "";
      gridContainer.style.padding = "0";

      const centerX = containerSize / 2;
      const centerY = containerSize / 2;
      const maxRadius = containerSize / 2 - DOT_SIZE;

      let dotsPlaced = 0;

      for (let ring = 0; ring < rings; ring++) {
        const radius = (ring / (rings - 1)) * maxRadius;
        const desiredSpacing = DOT_SIZE + 6;
        const circumference = 2 * Math.PI * radius;
        let approxDotsInRing = ring === 0 ? 1 : Math.max(3, Math.round(circumference / desiredSpacing));

        for (let i = 0; i < approxDotsInRing; i++) {
          if (dotsPlaced >= rings * rings * 3) break;
          const angle = (i / approxDotsInRing) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          const dot = document.createElement("div");
          dot.classList.add("dot", shape);
          dot.style.position = "absolute";
          dot.style.width = `${DOT_SIZE}px`;
          dot.style.height = `${DOT_SIZE}px`;
          dot.style.left = `${x - DOT_SIZE / 2}px`;
          dot.style.top = `${y - DOT_SIZE / 2}px`;

          const dotIndex = dotsPlaced;
          dot.dataset.index = dotIndex;
          dot.addEventListener("click", () => {
            toggleDotColor(dotIndex);
          });
          gridContainer.appendChild(dot);
          dots.push(dot);
          dotsPlaced++;
        }
      }
    }
  }

  function setDotColor(dot, color) {
    dot.style.backgroundColor = color || "white";
  }

  function getDotColor(dot) {
    const bg = dot.style.backgroundColor;
    if (!bg || bg === "white" || bg === "rgb(255, 255, 255)") return null;
    return bg;
  }

  function toggleDotColor(index) {
    const dot = dots[index];
    const prevColor = getDotColor(dot);
    const newColor = prevColor === null ? currentColor : null;
    setDotColor(dot, newColor);
    undoStack.push({ index, prevColor, newColor });
    redoStack = [];
  }

  function undo() {
    if (undoStack.length === 0) return;
    const lastAction = undoStack.pop();
    setDotColor(dots[lastAction.index], lastAction.prevColor);
    redoStack.push({ index: lastAction.index, prevColor: lastAction.newColor, newColor: lastAction.prevColor });
  }

  function redo() {
    if (redoStack.length === 0) return;
    const action = redoStack.pop();
    setDotColor(dots[action.index], action.newColor);
    undoStack.push(action);
  }

  function updateGrid() {
    const shape = shapeTypeSelect.value;
    undoStack = [];
    redoStack = [];
    if (shape === "circle") {
      circleSizeSelect.style.display = "";
      circleSizeLabel.style.display = "";
      gridSizeSelect.style.display = "none";
      gridSizeLabel.style.display = "none";
      createGrid(parseInt(circleSizeSelect.value), shape);
    } else {
      circleSizeSelect.style.display = "none";
      circleSizeLabel.style.display = "none";
      gridSizeSelect.style.display = "";
      gridSizeLabel.style.display = "";
      createGrid(parseInt(gridSizeSelect.value), shape);
    }
  }

  function setPosition(position) {
    gridContainer.classList.remove("position-top", "position-middle", "position-bottom");
    gridContainer.classList.add(`position-${position}`);
    posTopBtn.classList.toggle("active", position === "top");
    posMiddleBtn.classList.toggle("active", position === "middle");
    posBottomBtn.classList.toggle("active", position === "bottom");
  }

  function addPointerListener(button, position) {
    button.addEventListener("click", () => setPosition(position));
    button.addEventListener("touchstart", (e) => {
      e.preventDefault();
      setPosition(position);
    }, { passive: false });
  }

  addPointerListener(posTopBtn, "top");
  addPointerListener(posMiddleBtn, "middle");
  addPointerListener(posBottomBtn, "bottom");

  shapeTypeSelect.addEventListener("change", updateGrid);
  gridSizeSelect.addEventListener("change", updateGrid);
  circleSizeSelect.addEventListener("change", updateGrid);
  resetBtn.addEventListener("click", updateGrid);

  colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
    } else if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === "y" || (e.shiftKey && e.key.toLowerCase() === "z"))) {
      e.preventDefault();
      redo();
    }
  });

  updateGrid();
  setPosition("bottom");
});
