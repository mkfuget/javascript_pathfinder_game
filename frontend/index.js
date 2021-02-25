class Board {
    constructor(width, height)
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
                if (mazeSquares[i][j] == 0)
                {
                    this.boardCells[i][j] = new EmptyCell(i, j)
                }
                else if (mazeSquares[i][j] == 0)
                {
                    this.boardCells[i][j] = new FullCell(i, j)
                }
            }
        }

    }
    setBoardCell(x_index, y_index, cell)
    {
        this.boardCells[x_index][y_index] = cell;
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
    constructor(x_index, y_index, board)
    {
        this.x_index = x_index;
        this.y_index = y_index;
        this.board = board;
        this.bitMask = 0;
    }

    move(deltaX, deltaY)
    {
        return this.board.boardCells[this.x_index + deltaX][this.y_index+deltaY].takeCursor(this)
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
const maze = new Board(TEST_WIDTH, TEST_HEIGHT)
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
    let deltaOpacity = 0.1;
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

    },100)
    cell.style.opacity = 0

}
const log = document.getElementById('log');

documentMain.addEventListener('keypress', function(){
    for(let i=0; i<200; i++)
    {
        setTimeout(function(){
            flashCell(i, "red")
        }, 100*i) 
    }
})




