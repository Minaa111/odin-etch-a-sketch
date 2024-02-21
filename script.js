// Targeting the grid container div
const gridContainer = document.querySelector('.grid-container');

// Setting a default grid size
size = 16;



for(let i = 0; i < size; i++){
    // insert size numbered rows
    const row = document.createElement('div');
    row.setAttribute('style', 'display: flex; flex-grow: 1')
    gridContainer.append(row);
    for(let j = 0; j < size; j++){
        // insert size numbered squares into each row
        const square = document.createElement('div');
        square.setAttribute('style', 'display: flex; flex-grow: 1;height: auto; width: auto;');
        row.append(square)
        square.addEventListener('mouseover', () => {
            square.classList.add('hover-effect')
        })
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover-effect'); // Revert to default background color
        });
    }
    
}