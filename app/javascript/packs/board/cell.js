import redKeyImage from '../../images/red_key.png'
import blueKeyImage from '../../images/blue_key.png'
import greenKeyImage from '../../images/green_key.png'
import yellowKeyImage from '../../images/yellow_key.png'

import redLockImage from '../../images/red_lock.png'
import blueLockImage from '../../images/blue_lock.png'
import greenLockImage from '../../images/green_lock.png'
import yellowLockImage from '../../images/yellow_lock.png'

import iceCellImage from '../../images/ice_cell.png'
import wallCellImage from '../../images/wall_cell.png'
import emptyCellImage from '../../images/empty_cell.png'
export class Cell
{
    constructor(xIndex, yIndex, type)
    {
        this.xIndex = xIndex
        this.yIndex = yIndex
        this.type = type
    }
}
export class EmptyCell extends Cell
{
    
    CELL_COLOR(){return "#FFFFFF";}
    CELL_IMAGE(){return `url(${emptyCellImage})`}

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
    CELL_COLOR(){return "#000000";}
    CELL_IMAGE(){return `url(${wallCellImage})`}
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


export class LockCell extends Cell
{
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

export class KeyCell extends Cell
{
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
export class RedLockCell extends LockCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${redLockImage})`}
    BIT_VALUE(){return 1}
}
export class RedKeyCell extends KeyCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${redKeyImage})`}
    BIT_VALUE(){return 1}
}
export class BlueLockCell extends LockCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${blueLockImage})`}
    BIT_VALUE(){return 2}
}
export class BlueKeyCell extends KeyCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${blueKeyImage})`}
    BIT_VALUE(){return 2}
}
export class GreenLockCell extends LockCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${greenLockImage})`}
    BIT_VALUE(){return 4}
}
export class GreenKeyCell extends KeyCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${greenKeyImage})`}
    BIT_VALUE(){return 4}
}
export class YellowLockCell extends LockCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${yellowLockImage})`}
    BIT_VALUE(){return 8}
}
export class YellowKeyCell extends KeyCell
{
    CELL_COLOR(){return "FF0000";}
    CELL_IMAGE(){return `url(${yellowKeyImage})`}
    BIT_VALUE(){return 8}
}



export class IceCell extends Cell
{
    CELL_COLOR(){return "#E0FFFF";}
    CELL_IMAGE(){return `url(${iceCellImage})`}

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
    CELL_IMAGE(){return "none"}

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
