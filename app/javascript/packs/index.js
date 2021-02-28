class Board {
    constructor(width, height, boardData)
    {
        this.height = height;
        this.width = width;
        this.boardCells = new Array(height);
        for(let i=0; i<height; i++)
        {
            this.boardCells[i] = new Array(width)
        }
        for(let i=0; i<height; i++)
        {
            for(let j=0; j<width; j++)
            {
                switch(boardData[i][j])
                {
                    case 0:
                        this.boardCells[i][j] = new EmptyCell(j, i)
                        break;
                    case 1:
                        this.boardCells[i][j] = new WallCell(j, i)
                        break;
                    case "r":
                        this.boardCells[i][j] = new RedKey(j, i)
                        break;
                    case "R":
                        this.boardCells[i][j] = new RedCell(j, i)
                        break;
                    case "i":
                        this.boardCells[i][j] = new IceCell(j, i)
                        break;
                    case "f":
                        this.boardCells[i][j] = new FinishCell(j, i)
                        break;

                }
            }
        }

    }
    solveMaze(cursor)//returns one array of the sqaures in the path finding algorithm and one for the shortest path solution 
    {
        let pathTravelled = new Array(this.height)
        for(let i=0; i<this.height; i++)//initialize a 3-d array that corresponding to every square on the board and a third index for the bitmask value
        {
            pathTravelled[i] = new Array(this.width)
        }
        for(let i=0; i<this.height; i++)
        {
            for(let j=0; j<this.width; j++)
            {
                pathTravelled[i][j] = new Array(16).fill(false)
            }
        }
        let solveQueue = [];
        let solveOrder = [];
        pathTravelled[cursor.yIndex][cursor.xIndex][cursor.bitMask] = "Start Square"
        solveQueue.push(cursor);
        solveOrder.push(cursor);
        while(!solveOrder[0].puzzleSolved && !solveQueue.length == 0)
        {
            const firstCursor = solveQueue.shift();
            const currentXindex = firstCursor.xIndex;
            const currentYindex = firstCursor.yIndex;
            const currentBitMask = firstCursor.bitMask;

            let leftCursor = firstCursor.copyConstructor();
            let rightCursor = firstCursor.copyConstructor();
            let upCursor = firstCursor.copyConstructor();
            let downCursor = firstCursor.copyConstructor();
            const cursors = [rightCursor, downCursor, leftCursor, upCursor];
            const deltaXs = [1, 0, -1, 0];
            const delyaYs = [0, 1, 0, -1];
            for(let i =0; i<4; i++)
            {
                let currentCursor = cursors[i]
                if(currentCursor.move(deltaXs[i], delyaYs[i]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask])
                {
                    solveQueue.push(currentCursor);
                    solveOrder.push(currentCursor);
                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] = 
                    {
                        lastXIndex: currentXindex,
                        lastYIndex: currentYindex,
                        lastBitMask:  currentBitMask,
                    }
                }    
            }
        }
        let finish = solveOrder[solveQueue.length - 1];
        let shortestPath = [];
        if(finish.puzzleSolved)
        {
            
        }
        return
        {
            searchPath: solveOrder;
        } 
    }
    indexToXIndex(index)
    {
        return index%this.width;
    }
    indexToYIndex(index)
    {
        return Math.floor(index/this.width);
    }
    toBoardIndex(xIndex, yIndex)
    {
        return xIndex + this.height*yIndex;
    }
}

class Cell
{
    constructor(xIndex, yIndex)
    {
        this.xIndex = xIndex
        this.yIndex = yIndex
    }
}
class EmptyCell extends Cell
{
    
    CELL_COLOR(){return "white";}
    movementAllowed(cursor)
    {
        return true;
    }

    takeCursor(cursor)
    {
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        }
    }
}

class WallCell extends Cell
{
    CELL_COLOR(){return "black";}
    movementAllowed(cursor)
    {
        return false;
    }
    takeCursor(cursor)
    {
        return {
            type: "failure",
            reason: "wall"
        }
    }
}


class RedCell extends Cell
{
    CELL_COLOR(){return "PaleVioletRed";}
    BIT_VALUE(){return 1}
    movementAllowed(cursor)
    {
        return ((cursor.bitMask & this.BIT_VALUE()) == this.BIT_VALUE());
    }
    takeCursor(cursor)
    {
        if(!this.movementAllowed(cursor))
        {
            return {
                type: "failure",
                reason: "key not unlocked"
            }    
        }
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        }
    }
}

class RedKey extends Cell
{
    CELL_COLOR(){return "red";}
    BIT_VALUE(){return 1}
    movementAllowed(cursor)
    {
        return true;
    }
    takeCursor(cursor)
    {
        cursor.bitMask |= this.BIT_VALUE()
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "red"
        }
    }
}

class IceCell extends Cell
{
    CELL_COLOR(){return "LightCyan";}
    movementAllowed(cursor)
    {
        return true;
    }
    takeCursor(cursor, deltaX, deltaY)
    {
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        let result = cursor.move(deltaX, deltaY)
        return {
            type: "success",
            movementType: "slide",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: result.keysUnlocked

        }
    }
}

class FinishCell extends Cell
{
    CELL_COLOR(){return "#B0B0B0";}
    movementAllowed(cursor)
    {
        return true;
    }
    takeCursor(cursor)
    {
        cursor.puzzleSolved = true;
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "slide",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        }    
    }
}
class Cursor {

    constructor(xIndex, yIndex, board)
    {
        this.xIndex = xIndex;
        this.yIndex = yIndex;
        this.board = board;
        this.bitMask = 0;
        this.puzzleSolved = false;
    }

    boardHeight(){return this.board.height}
    boardWidth(){return this.board.width}

    move(deltaX, deltaY)
    {
        
        const xDestination = this.xIndex + deltaX
        const yDestination = this.yIndex + deltaY
        if(xDestination < 0 || yDestination < 0 || xDestination >= this.boardWidth() || yDestination >= this.boardHeight())
        {
            return {
                type: "failure",
                reason: "index out of bounds"
            }
        }
        return this.board.boardCells[yDestination][xDestination].takeCursor(this, deltaX, deltaY)
    }

    index()
    {
        return this.xIndex + this.yIndex*this.board.height
    }

    copyConstructor()
    {
        let out = new Cursor(this.xIndex, this.yIndex, this.board);
        out.bitMask = this.bitMask;
        out.puzzleSolved = this.puzzleSolved;
        return out;
    }
    boardIndex()
    {
        return this.board.toBoardIndex(this.xIndex, this.yIndex)
    }
}


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



