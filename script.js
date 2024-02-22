// Targeting the grid container div
const gridContainer = document.querySelector('.grid-container');

// Setting a default grid size
let size = 16;

const colorsArr = ['red', 'green', 'blue'];

// Setting a custom grid size
const customGridBtn = document.querySelector('.custom-size-btn');
customGridBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const customSize = parseInt(prompt('Enter a custom grid size: '));
    size = customSize;
    createGrid(size);
})

function createGrid() {
    for (let i = 0; i < size; i++) {
        // insert size numbered rows
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex; flex-grow: 1')
        gridContainer.append(row);
        for (let j = 0; j < size; j++) {
            // insert size numbered squares into each row
            const square = document.createElement('div');
            square.classList.add('grid-square'); // Add grid-square class
            row.append(square)
            square.addEventListener('mouseover', () => {
                if (isMouseDown) { // Check if mouse button is held down
                    handleSquarePaint(square);
                } else {
                    square.classList.add('hover-effect');
                }
            });
            square.addEventListener('mousedown', () => {
                isMouseDown = true;
                handleSquarePaint(square);
            });
            square.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
            square.addEventListener('mouseout', () => {
                if (!isMouseDown) { // Only remove hover effect if mouse button is not held down
                    square.classList.remove('hover-effect'); // Revert to default background color
                }
            });
        }
    }
}

function handleSquarePaint(square) {
    if (blackColorBtn.classList.contains('active')) {
        square.classList.add('black-color');
    } else if (randomColorBtn.classList.contains('active')) {
        const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
        square.setAttribute('style', 'background-color: ' + randomColor + '; border-color: ' + randomColor);
    }
}

// Flag to track mouse button state
let isMouseDown = false;

// Toggling black color button
const blackColorBtn = document.querySelector('.black-color-btn');
blackColorBtn.addEventListener('click', () => {
    blackColorBtn.classList.toggle('active');
})

const randomColorBtn = document.querySelector('.random-color-btn');
randomColorBtn.addEventListener('click', () => {
    randomColorBtn.classList.toggle('active');
})

const resetButton = document.querySelector('.reset-size-btn');
resetButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid();
})
createGrid();
