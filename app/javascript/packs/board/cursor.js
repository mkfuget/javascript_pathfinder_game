class Cursor {

    constructor(xIndex, yIndex, board)
    {
        this.xIndex = xIndex;
        this.yIndex = yIndex;
        this.board = board;
        this.bitMask = 0;
        this.stepsTaken = 0;
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
        const moveOutcome = this.board.boardCells[yDestination][xDestination].takeCursor(this, deltaX, deltaY)
        if(moveOutcome.type == "success")
        {
            this.stepsTaken++;
        }
        return moveOutcome;
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
        out.stepsTaken = this.stepsTaken;
        return out;
    }
    boardIndex()
    {
        return this.board.toBoardIndex(this.xIndex, this.yIndex)
    }
}
export default Cursor;