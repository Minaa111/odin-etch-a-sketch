// Targeting the grid container div
const gridContainer = document.querySelector('.grid-container');

// Setting a default grid size
let size = 16;

// Setting a custom grid size
const customGridBtn = document.querySelector('.custom-size-btn');
customGridBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const customSize = parseInt(prompt('Enter a custom grid size: '));
    size = customSize;
    createGrid(size);
})

function createGrid (){
    for(let i = 0; i < size; i++){
        // insert size numbered rows
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex; flex-grow: 1')
        gridContainer.append(row);
        for(let j = 0; j < size; j++){
            // insert size numbered squares into each row
            const square = document.createElement('div');
            square.setAttribute('style', 'display: flex; flex-grow: 1; height: auto; width: auto; border-style: dashed; border-color: lightgrey; border-width: 1px');
            row.append(square)
            square.addEventListener('mouseover', () => {
                square.classList.add('hover-effect')
            })
            square.addEventListener('mouseout', () => {
                square.classList.remove('hover-effect'); // Revert to default background color
            });
        }
    }    
}



createGrid();
