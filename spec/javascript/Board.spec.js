import Board from '../../app/javascript/packs/board/board'
import Cursor from '../../app/javascript/packs/board/cursor'
import * as cells from '../../app/javascript/packs/board/cell'
const MAZE_HEIGHT = 15;
const MAZE_WIDTH = 20;
let EMPTY_CELL_ARRAY = Array(MAZE_HEIGHT*MAZE_WIDTH).fill('E')
let EDIT_CELL_ARRAY = Array(MAZE_HEIGHT*MAZE_WIDTH).fill('E')

test('initialize board', () =>{
    const testBoard = new Board(20, 10);
    expect(testBoard.width).toBe(20);
    expect(testBoard.height).toBe(10);

});

test('initializeCursor', () =>{
    let testBoard = new Board(20, 10);
    expect(testBoard.width).toBe(20);
    expect(testBoard.height).toBe(10);
    let testCursor = new Cursor(testBoard)
    expect(testCursor.board).toBe(testBoard)
})

test('cursor move on an empty board', () =>{
    let testBoard = new Board(20, 10);
    addBoardData(testBoard, EMPTY_CELL_ARRAY)
    expect(testBoard.width).toBe(20);
    expect(testBoard.height).toBe(10);
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);
    expect(testCursor.xIndex).toBe(1)
})

test('cursor fails to move through a wall', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'W'
    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    let output = testCursor.move(1, 0);
    expect(output.type).toBe("failure")
    expect(testCursor.xIndex).toBe(0)

})

test('cursor fails to move through a lock cell', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'R'
    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    let output = testCursor.move(1, 0);
    expect(output.type).toBe("failure")
    expect(testCursor.xIndex).toBe(0)

})

test('cursor succeeds move through a lock cell after unlocking', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'r'
    EDIT_CELL_ARRAY[2] = 'R'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);
    let output = testCursor.move(1, 0);

    expect(output.type).toBe("success")
    expect(testCursor.xIndex).toBe(2)

})

test('cursor fails move through a lock cell after unlocking different color', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'r'
    EDIT_CELL_ARRAY[2] = 'Y'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);
    let output = testCursor.move(1, 0);

    expect(output.type).toBe("failure")
    expect(testCursor.xIndex).toBe(1)

})

test('Ice cells move until an empty square', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'I'
    EDIT_CELL_ARRAY[2] = 'I'
    EDIT_CELL_ARRAY[3] = 'I'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);

    expect(testCursor.xIndex).toBe(4)

})

test('Ice cells move until an blocking cell and end on the ice', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'I'
    EDIT_CELL_ARRAY[2] = 'I'
    EDIT_CELL_ARRAY[3] = 'I'
    EDIT_CELL_ARRAY[4] = 'W'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);

    expect(testCursor.xIndex).toBe(3)

})

test('Ice cells move until an blocking cell and end on the ice', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[1] = 'I'
    EDIT_CELL_ARRAY[2] = 'I'
    EDIT_CELL_ARRAY[3] = 'I'
    EDIT_CELL_ARRAY[4] = 'W'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)
    testCursor.move(1, 0);

    expect(testCursor.xIndex).toBe(3)

})

test('adding start and finish cells update the location on the board', () =>{
    let testBoard = new Board(20, 10);
    EDIT_CELL_ARRAY[21] = 'S'
    EDIT_CELL_ARRAY[22] = 'F'

    addBoardData(testBoard, EDIT_CELL_ARRAY)
    let testCursor = new Cursor(testBoard)

    expect(testBoard.startXIndex).toBe(1)
    expect(testBoard.finishXIndex).toBe(2)
    expect(testBoard.startYIndex).toBe(1)
    expect(testBoard.finishYIndex).toBe(1)
    expect(testCursor.xIndex).toBe(1)
    expect(testCursor.yIndex).toBe(1)

})

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

function addBoardData(board, cellArray)
{
    for(let i=0; i<board.width*board.height; i++)
    {
        let symbol = cellArray[i]
        addCellData(board, symbol, i)
    }
}
