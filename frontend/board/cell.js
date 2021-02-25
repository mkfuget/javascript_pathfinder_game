export class Cell
{
    constructor(xIndex, yIndex)
    {
        this.xIndex = xIndex
        this.yIndex = yIndex
    }
}
export class EmptyCell extends Cell
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

export class WallCell extends Cell
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