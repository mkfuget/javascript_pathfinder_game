import Board from'./board/board.js'
import Cursor from './board/cursor.js'

let documentMain = document.querySelector("body");


const TEST_WIDTH = 10;
const TEST_HEIGHT = 10;
const mazeSquares = [
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1],
    [ 0, 0, 0, 0, 1, 0, "i", 0, 0, "f"],
    [ 1, 0, 1, 0, 1, 0, "i", 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, "i", 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ "r", 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1],

]
const maze = new Board(TEST_WIDTH, TEST_HEIGHT, mazeSquares)
let testCursor = new Cursor(0, 0, maze)
function addBoard(width, height)
{
    let newBoardTable = document.createElement('table');
    let animatedCursor = document.createElement('div');
    newBoardTable.id = "maze_table"
    animatedCursor.id = "animated_cursor"
    animatedCursor.style.left = '10px'
    animatedCursor.style.top = '10px'

    documentMain.append(newBoardTable);
    newBoardTable.append(animatedCursor)
    for(let i=0; i<height; i++)
    {
        let newBoardRow = newBoardTable.insertRow();
        newBoardRow.id = "row_"+i;
        for(let j=0; j<width; j++)
        {
            let newBoardCell = newBoardRow.insertCell();
            newBoardCell.id = "cell_"+(j+i*width);
            newBoardCell.style.backgroundColor = maze.boardCells[i][j].CELL_COLOR();
            
        }
    }


}
addBoard(TEST_WIDTH, TEST_HEIGHT);
function flashCell(cellIndex, color)
{
    let deltaOpacity = 0.025;
    let opacity = 0;
    let cell = document.getElementById("cell_"+cellIndex)
    let startingBackgroundColor = cell.style.backgroundColor;
    let startingOpacity = cell.style.opacity
    cell.style.backgroundColor = color;
    let timer = window.setInterval(function() {
        cell.style.opacity = opacity
        opacity += deltaOpacity;
        if(opacity > 0.7){
            deltaOpacity*=-1;
        }
        if(opacity < 0){
            window.clearInterval(timer);
            cell.style.opacity = startingOpacity;
            cell.style.backgroundColor = startingBackgroundColor;
        
        }

    },16)

}
//Takes the result of an attempted move and animates it on the screen
function moveAnimatedCursor(moveHash)
{
    if(moveHash.type == "success")
    {
        let animatedCursor = document.getElementById('animated_cursor')
        let xCoordinate = parseInt(animatedCursor.style.left.replace('px', ''), 10);
        let yCoordinate = parseInt(animatedCursor.style.top.replace('px', ''), 10);
        animatedCursor.style.top = `${yCoordinate + moveHash.deltaY*43}px`;
        animatedCursor.style.left =`${xCoordinate + moveHash.deltaX*43}px`;    
    }
}
function animateSoluction(solution)
{
    let i =0; 
    let timer = window.setInterval(function() {
        flashCell(solution[i].boardIndex(), "red")
        i++;
        if(i>= solution.length)
        {
            window.clearInterval(timer);
        }
    }, 400)
}
document.addEventListener('keypress', (e) =>{
    switch(e.key) 
    {
        case "w":
            moveAnimatedCursor(testCursor.move(0, -1));
            break;
        case "a":
            moveAnimatedCursor(testCursor.move(-1, 0));
            break;
        case "s":
            moveAnimatedCursor(testCursor.move(0, 1));
            break;
        case "d":
            moveAnimatedCursor(testCursor.move(1, 0));
            break;
        case "p":
            animateSoluction(maze.solveMaze(testCursor));
                                    
    }   


});



