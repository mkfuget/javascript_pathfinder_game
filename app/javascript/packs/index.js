import Board from'./board/board.js'
import Cursor from './board/cursor.js'
import anime from 'animejs/lib/anime.es.js';
import PriorityQueue from "./PriorityQueue.js"
import * as cells from "./board/cell.js"

import blueLockImage from '../images/blue_lock.png'
import RedKeyImage from '../images/red_key.png'

import wallCell from '../images/wall_cell.png'

const MAZE_HEIGHT = 15;
const MAZE_WIDTH = 20;

let documentMain = document.querySelector("body");
window.mouseDown = false;
document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}


const mazeSquares = [
    [ "E", "W", "W", "E", "W", "E", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "E", "W", "W", "E", "W", "E", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "E", "W", "W", "E", "W", "E", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "E", "E", "E", "E", "W", "E", "I", "E", "E", "F", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "E", "W", "E", "W", "E", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "E", "W", "E", "W", "E", "I", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "E", "W", "E", "W", "E", "E", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "r", "E", "W", "E", "W", "E", "E", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "W", "E", "E", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "b", "B", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "g", "G", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "y", "Y", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "R", "R", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "R", "R", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    [ "W", "W", "W", "E", "R", "R", "R", "R", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
]
const board = new Board(MAZE_WIDTH, MAZE_HEIGHT, mazeSquares)
let testCursor = new Cursor(0, 0, board)
function dijkstraComparator(cursorA, cursorB)
{
    return cursorA.stepsTaken < cursorB.stepsTaken
}
let dijkstraQueue = new PriorityQueue(dijkstraComparator);
function mapSymbolToCell(symbol, i, j)
{
    switch(symbol)
    {
        case "E":
            return new cells.EmptyCell(j, i, symbol)
            break;
        case "W":
            return new cells.WallCell(j, i, symbol)
            break;
        case "r":
            return new cells.RedKeyCell(j, i, symbol)
            break;
        case "R":
            return new cells.RedLockCell(j, i, symbol)
            break;
        case "b":
            return new cells.BlueKeyCell(j, i, symbol)
            break;
        case "B":
            return new cells.BlueLockCell(j, i, symbol)
            break;
        case "g":
            return new cells.GreenKeyCell(j, i, symbol)
            break;
        case "G":
            return new cells.GreenLockCell(j, i, symbol)
            break;
        case "y":
            return new cells.YellowKeyCell(j, i, symbol)
            break;
        case "Y":
            return new cells.YellowLockCell(j, i, symbol)
            break;

        case "I":
            return new cells.IceCell(j, i, symbol)
            break;
        case "F":
            return new cells.FinishCell(j, i, symbol)
            break;
    }
}
function addCellToBoard(board, symbol, i, j)
{
    board.boardCells[i][j] = mapSymbolToCell(symbol, i, j);
    const cellId = "cell_"+(j+i*MAZE_WIDTH);
    const cellImage = "cell_image_"+(j+i*MAZE_WIDTH);

    let mazeCell = document.getElementById(cellId);
    let mazeCellImage = document.getElementById(cellImage)
    const currentCell = board.boardCells[i][j];
    if(currentCell.CELL_IMAGE() !== "none")
    {
        mazeCellImage.style.background = currentCell.CELL_IMAGE();
    }
    mazeCell.style.backgroundColor = board.boardCells[i][j].CELL_COLOR();

}
function clickSetCell(board, i, j)
{
    let symbol = document.getElementById('selected_cell').value;
    addCellToBoard(board, symbol, i, j)        
}
function hoverClickSetCell(board, i, j)
{
    if(window.mouseDown === true)
    {
        clickSetCell(board, i, j)
    }
}
function addBoard(board)
{
    let mazeTable = document.getElementById('maze_table');
    let animatedCursor = document.createElement('div');
    animatedCursor.id = "animated_cursor"
    animatedCursor.style.left = '9px'
    animatedCursor.style.top = '9px'

    mazeTable.append(animatedCursor)
    for(let i=0; i<15; i++)
    {
        for(let j=0; j<20; j++)
        {
            const cellId = "cell_"+(j+i*MAZE_WIDTH);        
            let mazeCell = document.getElementById(cellId);
            mazeCell.addEventListener("mouseenter", function(){hoverClickSetCell(board, i, j)});
            mazeCell.addEventListener("mousedown", function(){clickSetCell(board, i, j)});

            addCellToBoard(board, mazeSquares[i][j], i, j)

        }
    }

}
addBoard(board);
function exportBoard(board)
{
    const url = 'api/v1/boards'
    let cells = [];
    for(let i=0; i<board.height; i++)
    {
        for(let j=0; j<board.width; j++)
        {
            cells.push({
                cell_type: board.boardCells[i][j].type,
                board_index: board.toBoardIndex(j, i)
            })
        }
    }

    const boardData = {
        width: board.width,
        height: board.height,
        board_type: "base",
        cells_attributes: cells
    }
    const boardConfigObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(boardData)
    };
    fetch(url, boardConfigObject)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(error => alert(error.message));


}
//Takes the result of an attempted move and animates it on the screen
let animationQueue = [];
function addToAnimationQueue(moveHash)
{
    if(moveHash.type == "success")
    {
        animationQueue.push(moveHash);
        if(animationQueue.length === 1)
        {
            dequeueAnimationQueue()
        }
    }
}
function dequeueAnimationQueue()
{
    let moveHash = animationQueue[0];
    const animatedCursor = document.getElementById('animated_cursor')
    const deltaXCoord = moveHash.deltaX*40;
    const deltaYCoord = moveHash.deltaY*40;
    const animation = anime({
        targets: animatedCursor,
        translateX: `+=${deltaXCoord}px`,
        translateY: `+=${deltaYCoord}px`,
        easing: 'easeInOutQuad',
        duration: 400,
    })
    animation.finished.then(function()
    {
        animationQueue.shift();
        if(animationQueue.length > 0)
        {
            dequeueAnimationQueue()
        }
    })
}
function animateSolution(solution)
{
    let pathFindingAnimeTimeline = anime.timeline({
        easing: 'linear',
    })    
    
    for(let i=0; i<solution.searchPath.length; i++)
    {
        const currentCursor = solution.searchPath[i]
        const boardIndex  = board.toBoardIndex(currentCursor.xIndex, currentCursor.yIndex);
        const cell = document.getElementById(`cell_${boardIndex}`)
        const currentCellColor = `${cell.style.backgroundColor}`
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: currentCursor.cursorColor(),
            duration: 300,
        }, 75*i)

    }
    for(let i=0; i<solution.foundPath.length; i++)
    {
        const currentCell = solution.foundPath[i]
        const boardIndex  = board.toBoardIndex(currentCell.xIndex, currentCell.yIndex);
        const flashColor = '#FFFF00'
        const cell = document.getElementById(`cell_${boardIndex}`)
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: flashColor,
            duration: 300,
        }, '-=150')

    }

    
}
document.addEventListener('keypress', (e) =>{
    switch(e.key) 
    {
        case "w":
            addToAnimationQueue(testCursor.move(0, -1));
            break;
        case "a":
            addToAnimationQueue(testCursor.move(-1, 0));
            break;
        case "s":
            addToAnimationQueue(testCursor.move(0, 1));
            break;
        case "d":
            addToAnimationQueue(testCursor.move(1, 0));
            break;
        case "p":
            animateSolution(board.solveMaze(testCursor, dijkstraQueue));
            break;
        case "x":
            exportBoard(board)
            break;
                                    
    }   


});



