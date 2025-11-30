
function drawGrid() {
    
}

function attachListener() {
    const buttonNode = document.querySelector('button');
    buttonNode.addEventListener("click", () => {
        let cellsNumber = prompt("Input number of cells");
        drawGrid(cellsNumber);
    });
}



attachListener();
drawGrid(64);