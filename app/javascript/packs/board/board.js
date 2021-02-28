import {Cell, EmptyCell, FullCell} from "./cell.js"

class Board {
    constructor(length, width)
    {
        this.length = length;
        this.width = width;
        this.boardCells = new Array(width);
        for(let i=0; i<width; i++)
        {
            this.boardCells[i] = new Array(length)
        }
    }
    set boardCell(x_index, y_index, cell)
    {
        this.boardCells[x_index][y_index] = cell;
    }
}
export default Board;