import Board from'./board/board.js'
import {pathSolution} from'./board/board.js'

import Cursor from './board/cursor.js'
import {MovementResult} from './board/cursor.js'
const anime = require('animejs/lib/anime.es.js')
import * as cells from "./board/cell.js"

const MAZE_HEIGHT = 15;
const MAZE_WIDTH = 20;
const START_X_COORDINATE = 15;
const START_Y_COORDINATE = 35;
const CELL_WIDTH = 40;
const EMPTY_CELL_ARRAY = Array(MAZE_HEIGHT*MAZE_WIDTH).fill('E')
let mouseDown = false;
document.onmousedown = function() {
    mouseDown = true;
}
document.onmouseup = function() {
    mouseDown = false;
}

let userLevelIndex = 0;
let baseLevelIndex = 0;
let userLevelMax = 0;
let baseLevelMax = 0;
let gameMode = "baseLevels"
interface importLevels {
    userLevels: string[][],
    baseLevels: string[][],
}
let importData: importLevels;
let darkMode = true;
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
          let userLevelCells: string[][] = [];
          let baseLevelCells: string[][] = [];
          for(let i=0; i<json.length; i++)
          {
            let cells = json[i].cells.map(function(val: any, index:number ){
                return val.cell_type;
            })
            if(json[i].board_type === "base")
            {
                baseLevelCells.push(cells)
            }
            else if(json[i].board_type === "user")
            {
                userLevelCells.push(cells)
            }
          }
          if(baseLevelCells.length === 0)
          {
            baseLevelCells.push(EMPTY_CELL_ARRAY)
          }
          if(userLevelCells.length === 0)
          {
            userLevelCells.push(EMPTY_CELL_ARRAY)
          }

        importData.userLevels = userLevelCells;
        importData.baseLevels = baseLevelCells;

        addBoardData(mainBoard, importData.baseLevels[baseLevelIndex])
        addBoard(mainBoard, mainCursor)
        userLevelMax = importData.userLevels.length;
        baseLevelMax = importData.baseLevels.length;
        
        const maxUserLevelElement = document.getElementById('max_user_level')
        if(maxUserLevelElement instanceof HTMLElement)
        {
            maxUserLevelElement.innerHTML = String(userLevelMax);
        }
        const maxBaseLevelElement = document.getElementById('max_base_level')
        if(maxBaseLevelElement instanceof HTMLElement)
        {
            maxBaseLevelElement.innerHTML = String(baseLevelMax);
        }
        const currentUserLevelElement = document.getElementById('current_user_level')
        if(currentUserLevelElement instanceof HTMLElement)
        {
            currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
        }
        const currentBaseLevelElement = document.getElementById('current_base_level')
        if(currentBaseLevelElement instanceof HTMLElement)
        {
            currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
        }

        const userLevelDownButton = document.getElementById('user_level_down');
        if(userLevelDownButton instanceof HTMLElement)
        {
            userLevelDownButton.addEventListener("click", function(){
                if(userLevelIndex>0)
                {
                    addBoardData(mainBoard, importData.userLevels[--userLevelIndex])
                    addBoard(mainBoard, mainCursor)
                    if(currentUserLevelElement instanceof HTMLElement)
                    {
                        currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
                    }
                }                            
            })
    
        }
        const userLevelUpButton = document.getElementById('user_level_up');
        if(userLevelUpButton instanceof HTMLElement)
        {
            userLevelUpButton.addEventListener("click", function(){
                if(userLevelIndex<userLevelMax-1)
                {
                    addBoardData(mainBoard, importData.userLevels[++userLevelIndex])
                    addBoard(mainBoard, mainCursor)
                    if(currentUserLevelElement instanceof HTMLElement)
                    {
                        currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
                    }
                }
            })
        }
        const baseLevelDownButton = document.getElementById('base_level_down');
        if(baseLevelDownButton instanceof HTMLElement)
        {
            baseLevelDownButton.addEventListener("click", function(){
                if(baseLevelIndex>0)
                {
                    addBoardData(mainBoard, importData.baseLevels[--baseLevelIndex])
                    addBoard(mainBoard, mainCursor)
                    if(currentBaseLevelElement instanceof HTMLElement)
                    {
                        currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
                    }
                }
            })
        }
        const baseLevelUpButton = document.getElementById('base_level_up');
        if(baseLevelUpButton instanceof HTMLElement)
        {
            baseLevelUpButton.addEventListener("click", function(){
                if(baseLevelIndex<baseLevelMax-1)
                {
                    addBoardData(mainBoard, importData.baseLevels[++baseLevelIndex])
                    addBoard(mainBoard, mainCursor)
                    if(currentBaseLevelElement instanceof HTMLElement)
                    {
                        currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
                    }
                }
            })
        }
        setGameMode('baseLevels')
        const UserLevelsButton = document.getElementById('user_levels_button')
        if(UserLevelsButton instanceof HTMLElement)
        {
            UserLevelsButton.addEventListener("click", function(){setGameMode('userLevels')});
        }
        const baseLevelsButton = document.getElementById('base_levels_button')
        if(baseLevelsButton instanceof HTMLElement)
        {
            baseLevelsButton.addEventListener("click", function(){setGameMode('baseLevels')});
        }
        const EditModeButton = document.getElementById('edit_mode_button')
        if(EditModeButton instanceof HTMLElement)
        {
            EditModeButton.addEventListener("click", function(){setGameMode('editMode')});
        }
      })
}
function mapSymbolToCell(symbol: string, xIndex: number, yIndex: number): cells.Cell
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
        default:             
            return new cells.EmptyCell(xIndex, yIndex, symbol)
            break;

    }
}
function addCellToBoard(board: Board, xIndex:number, yIndex:number)
{
    const cellId = "cell_"+(xIndex+yIndex*MAZE_WIDTH);
    const cellImage = "cell_image_"+(xIndex+yIndex*MAZE_WIDTH);

    let mazeCell = document.getElementById(cellId);
    let mazeCellImage = document.getElementById(cellImage)
    const currentCell = board.boardCells[yIndex][xIndex];
    if(currentCell.CELL_IMAGE !== "none" && mazeCellImage instanceof HTMLElement)
    {
        mazeCellImage.style.background = currentCell.CELL_IMAGE;
    }
    if(mazeCell instanceof HTMLElement)
    {
        mazeCell.style.backgroundColor = board.boardCells[yIndex][xIndex].CELL_COLOR;
    }

}
function clickSetCell(board: Board, xIndex: number, yIndex: number)
{

    const selectedCell = document.getElementById('selected_cell');
    if(selectedCell instanceof HTMLInputElement)
    {
        let symbol = selectedCell.value;
        addCellData(board, symbol, board.toBoardIndex(xIndex, yIndex));
        addCellToBoard(board, xIndex, yIndex)            
    }
}
function hoverClickSetCell(board:Board, xIndex:number, yIndex:number)
{
    if(mouseDown === true)
    {
        clickSetCell(board, xIndex, yIndex)
    }
}
function addCellData(board: Board, symbol: string, i: number)
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
function addBoardData(board: Board, cellArray: string[])
{
    for(let i=0; i<board.width*board.height; i++)
    {
        let symbol = cellArray[i]
        addCellData(board, symbol, i)
    }
}
//takes a already filled in board and adds that data to the screen
function resetMainCursor(cursor: Cursor)
{
    cursor.reset();
    let animatedCursor = document.getElementById('animated_cursor');
    if(animatedCursor instanceof HTMLElement)
    {
        animatedCursor.style.transform = 'translate(0px)';
        animatedCursor.style.top = `${cursor.yIndex*CELL_WIDTH + START_Y_COORDINATE}px`
        let topLeftCursor = document.getElementById('top_left')
        let topRightCursor = document.getElementById('top_right')
        let bottomLeftCursor = document.getElementById('bottom_left')
        let bottomRightCursor = document.getElementById('bottom_right')
        if(topLeftCursor instanceof HTMLElement)
        {
            topLeftCursor.style.backgroundColor = "gray"
        }
        if(topRightCursor instanceof HTMLElement)
        {
            topRightCursor.style.backgroundColor = "gray"
        }
        if(bottomLeftCursor instanceof HTMLElement)
        {
            bottomLeftCursor.style.backgroundColor = "gray"
        }
        if(bottomRightCursor instanceof HTMLElement)
        {
            bottomRightCursor.style.backgroundColor = "gray"
        }
        animatedCursor.style.left = `${cursor.xIndex*CELL_WIDTH + START_X_COORDINATE}px`
    }
}
function addBoard(board: Board, cursor: Cursor)
{
    for(let i=0; i<board.width*board.height; i++)
    {
        const cellId = "cell_"+i;        
        let mazeCell = document.getElementById(cellId);
        let xIndex = mainBoard.indexToXIndex(i);
        let yIndex = mainBoard.indexToYIndex(i);
        if(mazeCell instanceof HTMLElement)
        {
            mazeCell.addEventListener("mouseenter", function(){hoverClickSetCell(board, xIndex, yIndex)});
            mazeCell.addEventListener("mousedown", function(){clickSetCell(board, xIndex, yIndex)});    
        }
        addCellToBoard(board, xIndex, yIndex)
    }
    resetMainCursor(cursor)

}

function setGameMode(mode: string)
{
    let userLevelsActionBar = document.getElementById('user_levels_action_bar');
    let baseLevelsActionBar = document.getElementById('base_levels_action_bar');
    let editModeActionBar = document.getElementById('edit_mode_action_bar');

    let userLevelsButton = document.getElementById('user_levels_button');
    let baseLevelsButton = document.getElementById('base_levels_button');
    let editModeButton = document.getElementById('edit_mode_button');
    if(!(userLevelsActionBar instanceof HTMLElement && baseLevelsActionBar instanceof HTMLElement && editModeActionBar instanceof HTMLElement && userLevelsButton instanceof HTMLElement && baseLevelsButton instanceof HTMLElement && editModeButton instanceof HTMLElement))
    {
        console.log("Missing Game Mode Elements")
    }
    else 
    {
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

                addBoardData(mainBoard, importData.baseLevels[baseLevelIndex]);
                addBoard(mainBoard, mainCursor);


                break;

            case 'userLevels':
                gameMode = 'userLevels'

                baseLevelsActionBar.style.display = 'none'
                userLevelsActionBar.style.display= 'block'
                editModeActionBar.style.display = 'none'

                baseLevelsButton.className = 'deselected'
                userLevelsButton.className = 'selected'
                editModeButton.className = 'deselected'

                addBoardData(mainBoard, importData.userLevels[userLevelIndex]);
                addBoard(mainBoard, mainCursor);

                break;

            case 'editMode':
                gameMode = 'editMode'

                baseLevelsActionBar.style.display = 'none'
                userLevelsActionBar.style.display= 'none'
                editModeActionBar.style.display = 'block'

                baseLevelsButton.className = 'deselected'
                userLevelsButton.className = 'deselected'
                editModeButton.className = 'selected'

                addBoardData(mainBoard, EMPTY_CELL_ARRAY);
                addBoard(mainBoard, mainCursor);

                break;

        }
    }
}

function exportBoard(board: Board)
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
interface moveHash{
    deltaX: number;
    deltaY: number;
    type: string;
    keysUnlocked: number;
}
let animationQueue: MovementResult[];
function unlockAnimateUnlockCursorKey(value: number | string)
{
    switch(value)
    {
        case 1:
            let topLeftElement = document.getElementById("top_left");
            if(topLeftElement instanceof HTMLElement)
            {
                topLeftElement.style.backgroundColor = "red"
            }
            break;
        case 2:
            let topRightlement = document.getElementById("top_right");
            if(topRightlement instanceof HTMLElement)
            {
                topRightlement.style.backgroundColor = "blue"
            }
            break;
        case 4:
            let bottomLeftElement = document.getElementById("bottom_left");
            if(bottomLeftElement instanceof HTMLElement)
            {
                bottomLeftElement.style.backgroundColor = "green"
            }
            break;
        case 8:
            let bottomRightElement = document.getElementById("bottom_right");
            if(bottomRightElement instanceof HTMLElement)
            {
                bottomRightElement.style.backgroundColor = "yellow"
            }
            break;
    }
}
//used to ensure previous movement animations complete before this one start
function addToAnimationQueue(moveHash: MovementResult)
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
    const deltaXCoord = moveHash.deltaX*CELL_WIDTH;
    const deltaYCoord = moveHash.deltaY*CELL_WIDTH;
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
        unlockAnimateUnlockCursorKey(moveHash.keysUnlocked);
        if(animationQueue.length > 0)
        {
            dequeueAnimationQueue()
        }
    })
}
function animateSolution(solution: pathSolution)
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
            background: Cursor.keysUnlockedColor(currentCell.bitMask),
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
            let dijsktraCheckBox = document.getElementById('dijkstra')
            let depthFirstSearchCheckBox = document.getElementById('depth_first_search')
            let aStarSearchWeakCheckBox = document.getElementById('a_star_search_weak')
            let aStarSearchStrongCheckBox = document.getElementById('a_star_search_strong')

            if(dijsktraCheckBox instanceof HTMLInputElement && dijsktraCheckBox.checked)
            {
                animateSolution(mainBoard.dijsktra(mainCursor));
            }
            else if(depthFirstSearchCheckBox instanceof HTMLInputElement && depthFirstSearchCheckBox.checked)
            {
                animateSolution(mainBoard.depthFirstSearch(mainCursor));
            }
            else if(aStarSearchWeakCheckBox instanceof HTMLInputElement && aStarSearchWeakCheckBox.checked)
            {
                animateSolution(mainBoard.aStarSearch(mainCursor, 1));
            }
            else if(aStarSearchStrongCheckBox instanceof HTMLInputElement && aStarSearchStrongCheckBox.checked)
            {
                animateSolution(mainBoard.aStarSearch(mainCursor, 3));
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
