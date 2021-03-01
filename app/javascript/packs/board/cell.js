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

export class WallCell extends Cell
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


export class RedCell extends Cell
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

export class RedKey extends Cell
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

export class IceCell extends Cell
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

export class FinishCell extends Cell
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