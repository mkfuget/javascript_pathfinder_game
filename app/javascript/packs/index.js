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

let userLeveLIndex = 0;
let baseLeveLIndex = 0;


let importData = {};
let mainBoard = new Board(MAZE_WIDTH, MAZE_HEIGHT)

function importBoards()
{
    const url = "api/v1/boards";
    fetch(url)
    .then(function(response) {
        return response.json();
      }).then(function(json) {
          let userLevelCells = [];
          let baseLevelCells = [];
          for(let i=0; i<json.length; i++)
          {
            let cells = json[i].cells.map(x => x.cell_type)
            if(json[i].board_type === "base")
            {
                baseLevelCells.push(cells)
            }
            else if(json[i].board_type === "user")
            {
                userLevelCells.push(cells)
            }
          }
        importData = {
            userLevels: userLevelCells,
            baseLevels: baseLevelCells
        };
        addBoard(mainBoard, importData.baseLevels[baseLeveLIndex])
      })
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
let testCursor = new Cursor(0, 0, mainBoard)
function dijkstraComparator(cursorA, cursorB)
{
    return cursorA.stepsTaken < cursorB.stepsTaken
}
let dijkstraQueue = new PriorityQueue(dijkstraComparator);
function mapSymbolToCell(symbol, xIndex, yIndex)
{
    switch(symbol)
    {
        case "E":
            return new cells.EmptyCell(xIndex, yIndex, symbol)
            break;
        case "W":
            return new cells.WallCell(xIndex, yIndex, symbol)
            break;
        case "r":
            return new cells.RedKeyCell(xIndex, yIndex, symbol)
            break;
        case "R":
            return new cells.RedLockCell(xIndex, yIndex, symbol)
            break;
        case "b":
            return new cells.BlueKeyCell(xIndex, yIndex, symbol)
            break;
        case "B":
            return new cells.BlueLockCell(xIndex, yIndex, symbol)
            break;
        case "g":
            return new cells.GreenKeyCell(xIndex, yIndex, symbol)
            break;
        case "G":
            return new cells.GreenLockCell(xIndex, yIndex, symbol)
            break;
        case "y":
            return new cells.YellowKeyCell(xIndex, yIndex, symbol)
            break;
        case "Y":
            return new cells.YellowLockCell(xIndex, yIndex, symbol)
            break;

        case "I":
            return new cells.IceCell(xIndex, yIndex, symbol)
            break;
        case "F":
            return new cells.FinishCell(xIndex, yIndex, symbol)
            break;
    }
}
function addCellToBoard(board, symbol, xIndex, yIndex)
{
    board.boardCells[yIndex][xIndex] = mapSymbolToCell(symbol, xIndex, yIndex);
    const cellId = "cell_"+(xIndex+yIndex*MAZE_WIDTH);
    const cellImage = "cell_image_"+(xIndex+yIndex*MAZE_WIDTH);

    let mazeCell = document.getElementById(cellId);
    let mazeCellImage = document.getElementById(cellImage)
    const currentCell = board.boardCells[yIndex][xIndex];
    if(currentCell.CELL_IMAGE() !== "none")
    {
        mazeCellImage.style.background = currentCell.CELL_IMAGE();
    }
    mazeCell.style.backgroundColor = board.boardCells[yIndex][xIndex].CELL_COLOR();

}
function clickSetCell(board, xIndex, yIndex)
{
    let symbol = document.getElementById('selected_cell').value;
    addCellToBoard(board, symbol, xIndex, yIndex)        
}
function hoverClickSetCell(board, xIndex, yIndex)
{
    if(window.mouseDown === true)
    {
        clickSetCell(board, xIndex, yIndex)
    }
}
function addBoard(board, cellArray)
{
    let mazeTable = document.getElementById('maze_table');
    let animatedCursor = document.createElement('div');
    animatedCursor.id = "animated_cursor"
    animatedCursor.style.left = '9px'
    animatedCursor.style.top = '9px'

    mazeTable.append(animatedCursor)
    for(let i=0; i<MAZE_HEIGHT*MAZE_WIDTH; i++)
    {
        const cellId = "cell_"+i;        
        let mazeCell = document.getElementById(cellId);
        let xIndex = mainBoard.indexToXIndex(i);
        let yIndex = mainBoard.indexToYIndex(i);

        mazeCell.addEventListener("mouseenter", function(){hoverClickSetCell(board, xIndex, yIndex)});
        mazeCell.addEventListener("mousedown", function(){clickSetCell(board, xIndex, yIndex)});

        addCellToBoard(board, cellArray[i], xIndex, yIndex)
    }

}
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
        const boardIndex  = mainBoard.toBoardIndex(currentCursor.xIndex, currentCursor.yIndex);
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
        const boardIndex  = mainBoard.toBoardIndex(currentCell.xIndex, currentCell.yIndex);
        const flashColor = '#FFFF00'
        const cell = document.getElementById(`cell_${boardIndex}`)
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: flashColor,
            duration: 300,
        }, '-=150')

    }

    
}
function loadLevel(cell_array)
{
    mainBoard = new
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
            animateSolution(mainBoard.solveMaze(testCursor, dijkstraQueue));
            break;
        case "x":
            exportBoard(board)
            break;
        case "i":
            importBoards()
            break;
        case "c":
            console.log(importData);
            break;

                                        
    }   


});



