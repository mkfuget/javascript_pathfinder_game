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
const START_X_COORDINATE = 15;
const START_Y_COORDINATE = 35;

let documentMain = document.querySelector("body");
window.mouseDown = false;
document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}

let userLevelIndex = 0;
let baseLevelIndex = 0;
let userLevelMax = 0;
let baseLevelMax = 0;
let gameMode = "baseLevels"
let importData = {};

let mainBoard = new Board(MAZE_WIDTH, MAZE_HEIGHT)
let mainCursor = new Cursor(mainBoard)
importBoards()
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
        addBoardData(mainBoard, importData.baseLevels[baseLevelIndex])
        addBoard(mainBoard, mainCursor, importData.baseLevels[baseLevelIndex])
        userLevelMax = importData.userLevels.length;
        baseLevelMax = importData.baseLevels.length;

        document.getElementById('max_user_level').innerHTML = userLevelMax;
        document.getElementById('max_base_level').innerHTML = baseLevelMax;
        document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
        document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;

        document.getElementById('user_level_down').addEventListener("click", function(){
            if(userLevelIndex>0)
            {
                addBoardData(mainBoard, importData.userLevels[--userLevelIndex])
                addBoard(mainBoard, mainCursor)
                document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
            }
        })
        document.getElementById('user_level_up').addEventListener("click", function(){
            if(userLevelIndex<userLevelMax-1)
            {
                addBoardData(mainBoard, importData.userLevels[++userLevelIndex])
                addBoard(mainBoard, mainCursor)
                document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
            }
        })
        document.getElementById('base_level_down').addEventListener("click", function(){
            if(baseLevelIndex>0)
            {
                addBoardData(mainBoard, importData.baseLevels[--baseLevelIndex])
                addBoard(mainBoard, mainCursor)
                document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;
            }
        })
        document.getElementById('base_level_up').addEventListener("click", function(){
            if(baseLevelIndex<baseLevelMax-1)
            {
                addBoardData(mainBoard, importData.baseLevels[++baseLevelIndex])
                addBoard(mainBoard, mainCursor)
                document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;
            }
        })
        setGameMode('baseLevels')
        document.getElementById('user_levels_button').addEventListener("click", function(){setGameMode('userLevels')});
        document.getElementById('base_levels_button').addEventListener("click", function(){setGameMode('baseLevels')});;
        document.getElementById('edit_mode_button').addEventListener("click", function(){setGameMode('editMode')});;
    
      })
}
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
        case "S":
            return new cells.StartCell(xIndex, yIndex, symbol)
            break;
    }
}
function addCellToBoard(board, xIndex, yIndex)
{
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
    addCellData(board, symbol, board.toBoardIndex(xIndex, yIndex));
    addCellToBoard(board, xIndex, yIndex)        
}
function hoverClickSetCell(board, xIndex, yIndex)
{
    if(window.mouseDown === true)
    {
        clickSetCell(board, xIndex, yIndex)
    }
}
function addCellData(board, symbol, i)
{
    let xIndex = board.indexToXIndex(i);
    let yIndex = board.indexToYIndex(i);

    board.boardCells[yIndex][xIndex] = mapSymbolToCell(symbol, xIndex, yIndex);
    if(symbol === "S")
    {
        board.startXIndex = xIndex;
        board.startYIndex = yIndex;
    }
    if(symbol === "F")
    {
        board.finishXIndex = xIndex;
        board.finishYIndex = yIndex;
    }

}
function addBoardData(board, cellArray)
{
    for(let i=0; i<board.width*board.height; i++)
    {
        let symbol = cellArray[i]
        addCellData(board, symbol, i)
    }
}
//takes a already filled in board and adds that data to the screen
function addBoard(board, cursor)
{
    let mazeTable = document.getElementById('maze_table');
    for(let i=0; i<board.width*board.height; i++)
    {
        const cellId = "cell_"+i;        
        let mazeCell = document.getElementById(cellId);
        let xIndex = mainBoard.indexToXIndex(i);
        let yIndex = mainBoard.indexToYIndex(i);

        mazeCell.addEventListener("mouseenter", function(){hoverClickSetCell(board, xIndex, yIndex)});
        mazeCell.addEventListener("mousedown", function(){clickSetCell(board, xIndex, yIndex)});
        addCellToBoard(board, xIndex, yIndex)
    }
    cursor.reset();
    let animatedCursor = document.getElementById('animated_cursor');
    animatedCursor.style.transform = 'translate(0px)';
    animatedCursor.style.left = `${cursor.xIndex + START_X_COORDINATE}px`
    animatedCursor.style.top = `${cursor.yIndex + START_Y_COORDINATE}px`

}

function setGameMode(mode)
{
    let userLevelsActionBar = document.getElementById('user_levels_action_bar');
    let baseLevelsActionBar = document.getElementById('base_levels_action_bar');
    let editModeActionBar = document.getElementById('edit_mode_action_bar');

    let userLevelsButton = document.getElementById('user_levels_button');
    let baseLevelsButton = document.getElementById('base_levels_button');
    let editModeButton = document.getElementById('edit_mode_button');

    switch(mode)
    {
        case 'baseLevels': 
            gameMode = 'baseLevels'

            baseLevelsActionBar.style.display = 'block'
            userLevelsActionBar.style.display= 'none'
            editModeActionBar.style.display = 'none'

            baseLevelsButton.className = 'selected'
            userLevelsButton.className = 'deselected'
            editModeButton.className = 'deselected'

            break;

        case 'userLevels':
            gameMode = 'userLevels'

            baseLevelsActionBar.style.display = 'none'
            userLevelsActionBar.style.display= 'block'
            editModeActionBar.style.display = 'none'

            baseLevelsButton.className = 'deselected'
            userLevelsButton.className = 'selected'
            editModeButton.className = 'deselected'

            break;

        case 'editMode':
            gameMode = 'editMode'

            baseLevelsActionBar.style.display = 'none'
            userLevelsActionBar.style.display= 'none'
            editModeActionBar.style.display = 'block'

            baseLevelsButton.className = 'deselected'
            userLevelsButton.className = 'deselected'
            editModeButton.className = 'selected'

            break;

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
        board_type: (gameMode === "userLevels" ? "user":"base"),
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
        autoplay: false,
    })    
    
    for(let i=0; i<solution.searchPath.length; i++)
    {
        const currentCursor = solution.searchPath[i]
        const boardIndex  = mainBoard.toBoardIndex(currentCursor.xIndex, currentCursor.yIndex);
        const cell = document.getElementById(`cell_${boardIndex}`)
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: currentCursor.cursorColor(),
            duration: 300,
        }, 1000+50*i)

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
    pathFindingAnimeTimeline.play();
    
}

document.addEventListener('keypress', (e) =>{
    switch(e.key) 
    {
        case "w":
            addToAnimationQueue(mainCursor.move(0, -1));
            break;
        case "a":
            addToAnimationQueue(mainCursor.move(-1, 0));
            break;
        case "s":
            addToAnimationQueue(mainCursor.move(0, 1));
            break;
        case "d":
            addToAnimationQueue(mainCursor.move(1, 0));
            break;
        case "p":
            if(document.getElementById('dijkstra').checked)
            {
                animateSolution(mainBoard.dijsktra(mainCursor));
            }
            else if(document.getElementById('depth_first_search').checked)
            {
                animateSolution(mainBoard.depthFirstSearch(mainCursor));
            }
            else if(document.getElementById('a_star_search_weak').checked)
            {
                animateSolution(mainBoard.aStarSearchWeak(mainCursor));
            }

            break;
        case "x":
            exportBoard(mainBoard)
            break;
        case "r":
            addBoard(mainBoard, mainCursor)
            break;

                                        
    }   


});



