import Board from'./board/board.js'
import Cursor from './board/cursor.js'
import anime from 'animejs/lib/anime.es.js';
import PriorityQueue from "./PriorityQueue.js"
import blueLockImage from '../images/blue_lock.png'
import RedKeyImage from '../images/red_key.png'

import wallCell from '../images/wall_cell.png'

const MAZE_HEIGHT = 15;
const MAZE_WIDTH = 20;

let documentMain = document.querySelector("body");


const mazeSquares = [
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 0, 0, 0, 0, 1, 0, "i", 0, 0, "f", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ "r", 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "b", "B", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "g", "G", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "y", "Y", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const board = new Board(MAZE_WIDTH, MAZE_HEIGHT, mazeSquares)
let testCursor = new Cursor(0, 0, board)
function dijkstraComparator(cursorA, cursorB)
{
    return cursorA.stepsTaken < cursorB.stepsTaken
}
let dijkstraQueue = new PriorityQueue(dijkstraComparator);
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
            const cellImage = "cell_image_"+(j+i*MAZE_WIDTH);

            let mazeCell = document.getElementById(cellId);
            let mazeCellImage = document.getElementById("cell_image_0")
            const currentCell = board.boardCells[i][j];
            if(currentCell.CELL_IMAGE() !== "none")
            {
                document.getElementById(cellImage).style.background = currentCell.CELL_IMAGE();
            }
              
            mazeCell.style.backgroundColor = board.boardCells[i][j].CELL_COLOR();

        }
    }

}
addBoard(board);
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
        const flashColor = 'rgba(179, 0, 255, 0.2)'
        const cell = document.getElementById(`cell_${boardIndex}`)
        const currentCellColor = `${cell.style.backgroundColor}`
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: currentCursor.cursorColor(),
            duration: 400,
        }, 75*i)

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
                                    
    }   


});



