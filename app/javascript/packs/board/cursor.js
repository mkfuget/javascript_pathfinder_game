import {board} from "./board.js"
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
export default Cursor;