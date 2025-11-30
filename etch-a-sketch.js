

function drawGrid(size) {
    const drawingNode = document.querySelector('.drawing');
    // Remove children if present
    while (drawingNode.firstChild) {
        drawingNode.removeChild(drawingNode.firstChild);
    }
    for (let i = 0; i < size; ++i) {
        // Append new row
        const row = getDivRow();
        drawingNode.append(row);
        for (let j = 0; j < size; ++j) {
            // Add cells to row
            const cell = getCellDiv();
            row.append(cell);
        }
    }
}

function resetGrid() {
    const drawingNode = document.querySelector('.drawing');
    const cellList = drawingNode.querySelectorAll('.cell');
    cellList.forEach(cell => {
        cell.style.opacity = '0';
    });
}

function getDivRow() {
    const row = document.createElement("div");
    row.style.setProperty('display', 'flex');
    row.style.setProperty('justify-content', 'space-between');
    row.style.setProperty('align-items', 'center');
    row.style.setProperty('height', '100%');
    // Set row style
    return row;
}

function getCellDiv() {
    const cell = document.createElement("div");
    // Set cell style
    cell.classList.add("cell");
    cell.style.setProperty('background-color', getRandomColor());
    cell.style.setProperty('border-style', 'solid');
    cell.style.setProperty('border-width', '1px')
    cell.style.setProperty('display', 'flex');
    cell.style.setProperty('flex', 'auto');
    cell.style.setProperty('height', '100%');
    cell.style.setProperty('opacity', '0.0');
    cell.addEventListener("mouseover", () => {
        if (cell.style.opacity == "1") return;
        else {
            cell.style.opacity = `${Number(cell.style.opacity) + 0.1}`;
        }
    });
    return cell;
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function getRandomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

function attachListener() {
    const buttonNode = document.querySelector('.button-input');
    buttonNode.addEventListener("click", () => {
        let cellsNumber = prompt("Input number of cells");
        drawGrid(cellsNumber);
    });
    buttonNode.nextElementSibling.addEventListener("click", () => {
        resetGrid();
    });
}

attachListener();
drawGrid(64);