import Board from'./board/board.js'
import Cursor from './board/cursor.js'
import anime from 'animejs/lib/anime.es.js';
import PriorityQueue from "./PriorityQueue.js"

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
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [ 1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
            let mazeCell = document.getElementById(cellId);
            mazeCell.style.backgroundColor = board.boardCells[i][j].CELL_COLOR();
            
        }
    }


}
addBoard(board);
function flashCell(cellIndex, color)
{
    const animation = anime({
        targets: cell,
        background: '#color',
        duration: 250,
        easing: 'linear',
        direction: 'alternate'

    })
}
//Takes the result of an attempted move and animates it on the screen
let animationQueue = [];
function addToAnimationQueue(moveHash)
{
    if(moveHash.type == "success")
    {
        animationQueue.push(moveHash);
        console.log(animationQueue.length)
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
    for(let i=0; i<solution.length; i++)
    {
        
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
            const output = board.solveMaze(testCursor, dijkstraQueue)
            animateSolution(maze.solveMaze(testCursor));
                                    
    }   


});



