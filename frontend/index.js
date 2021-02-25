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
                if (boardData[i][j] == 0)
                {
                    this.boardCells[i][j] = new EmptyCell(j, i)
                }
                else if (boardData[i][j] == 1)
                {
                    this.boardCells[i][j] = new WallCell(j, i)
                }
            }
        }

    }
    static indexToXIndex(index)
    {
        return index%this.width;
    }
    static indexToYIndex(index)
    {
        return Math.floor(index/this.width);
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
    movementAllowed(cursor)
    {
        return true;
    }
    takeCursor(cursor)
    {
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal"
        }
    }
}

class WallCell extends Cell
{
    movementAllowed(cursor)
    {
        return false;
    }
    takeCursor(cursor)
    {
        return {
            type: "failure",
            movementType: "blocked"
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
    }

    move(deltaX, deltaY)
    {
        const xDestination = this.xIndex + deltaX
        const yDestination = this.yIndex + deltaY

        return this.board.boardCells[yDestination][xDestination].takeCursor(this)
    }

    index()
    {
        return this.xIndex + this.yIndex*this.board.height
    }
}


let documentMain = document.querySelector("body");


const TEST_WIDTH = 10;
const TEST_HEIGHT = 10;
const mazeSquares = [
    [ 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],

]
const maze = new Board(TEST_WIDTH, TEST_HEIGHT, mazeSquares)
let testCursor = new Cursor(0, 0, maze)
function addBoard(width, height)
{
    let newBoardTable = document.createElement('table');
    documentMain.append(newBoardTable);
    for(let i=0; i<height; i++)
    {
        let newBoardRow = newBoardTable.insertRow();
        newBoardRow.id = "row_"+i;
        for(let j=0; j<width; j++)
        {
            let newBoardCell = newBoardRow.insertCell();
            newBoardCell.id = "cell_"+(j+i*width);
            if(mazeSquares[i][j] == 1)
            {
                newBoardCell.style.backgroundColor = "black";
            }
        }
    }

}
addBoard(TEST_WIDTH, TEST_HEIGHT);
function flashCell(cellIndex, color)
{
    let deltaOpacity = 0.025;
    let opacity = 0;
    let cell = document.getElementById("cell_"+cellIndex)
    cell.style.backgroundColor = color;
    let timer = window.setInterval(function() {
        cell.style.opacity = opacity
        opacity += deltaOpacity;
        if(opacity > 0.7){
            deltaOpacity*=-1;
        }
        if(opacity < 0){
            window.clearInterval(timer);
        }

    },16)
    cell.style.opacity = 0

}
document.addEventListener('keypress', (e) =>{
    switch(e.key) 
    {
        case "w":
            testCursor.move(0, -1);
            break;
        case "a":
            testCursor.move(-1, 0);
            break;
        case "s":
            testCursor.move(0, 1);
            break;
        case "d":
            testCursor.move(1, 0);
            break;
                                    
    }   
    flashCell(testCursor.index(), "red")


});



