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
import startCellImage from '../../images/start_cell.png'
import finishCellImage from '../../images/finish_cell.png'

import Cursor from './cursor'
interface movementResult {
    type: string;
    movementType: string;
    deltaX: number;
    deltaY: number;
    keysUnlocked: string | number;

}
export abstract class Cell
{
    xIndex: number;
    yIndex: number;
    type: string;
    abstract readonly CELL_COLOR: string
    abstract readonly CELL_IMAGE: string
    constructor(xIndex:number, yIndex:number, type:string)
    {
        this.xIndex = xIndex
        this.yIndex = yIndex
        this.type = type
    }
    public abstract takeCursor(cursor: Cursor, deltaX?: number, deltaY?: number): movementResult
    
    
}
export class EmptyCell extends Cell
{
    
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${emptyCellImage})`

    movementAllowed(cursor: Cursor): boolean
    {
        return true;
    }

    takeCursor(cursor: Cursor): movementResult
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
    readonly CELL_COLOR: string = "#000000";
    readonly CELL_IMAGE: string = `url(${wallCellImage})`
    movementAllowed(cursor: Cursor): boolean
    {
        return false;
    }
    takeCursor(cursor: Cursor): movementResult
    {
        return {
            type: "failure",
            movementType: "wall",
            deltaX: 0,
            deltaY: 0,
            keysUnlocked: 'none'

        }
    }
}


export abstract class LockCell extends Cell
{
    readonly abstract BIT_VALUE: number;
    movementAllowed(cursor: Cursor)
    {
        return ((cursor.bitMask & this.BIT_VALUE) == this.BIT_VALUE);
    }
    takeCursor(cursor: Cursor): movementResult
    {
        if(!this.movementAllowed(cursor))
        {
            return {
                type: "failure",
                movementType: "key not unlocked",
                deltaX: 0,
                deltaY: 0,
                keysUnlocked: 'none'    
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

export abstract class KeyCell extends Cell
{
    readonly abstract BIT_VALUE: number;
    movementAllowed(cursor: Cursor)
    {
        return true;
    }
    takeCursor(cursor: Cursor)
    {
        cursor.bitMask |= this.BIT_VALUE
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: this.BIT_VALUE
        }
    }
}
export class RedLockCell extends LockCell
{
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${redLockImage})`;
    readonly BIT_VALUE: number =  1;
}
export class RedKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${redKeyImage})`;
    readonly BIT_VALUE: number = 1;
}
export class BlueLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${blueLockImage})`;
    readonly BIT_VALUE: number = 2;
}
export class BlueKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${blueKeyImage})`
    readonly BIT_VALUE: number = 2
}
export class GreenLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${greenLockImage})`
    readonly BIT_VALUE: number = 4
}
export class GreenKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${greenKeyImage})`
    readonly BIT_VALUE: number = 4
}
export class YellowLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${yellowLockImage})`
    readonly BIT_VALUE: number = 8
}
export class YellowKeyCell extends KeyCell
{
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${yellowKeyImage})`
    readonly BIT_VALUE: number = 8
}



export class IceCell extends Cell
{
    readonly CELL_COLOR = "#E0FFFF";
    readonly CELL_IMAGE = `url(${iceCellImage})`

    movementAllowed(cursor: Cursor) : boolean
    {
        return true;
    }
    takeCursor(cursor: Cursor, deltaX: number, deltaY: number): movementResult
    {
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        let result = cursor.move(deltaX, deltaY);
        return {
            type: "success",
            movementType: "slide",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: result.keysUnlocked

        }
    }
}
export class StartCell extends Cell
{
    readonly CELL_COLOR = "#FFFFFF"
    readonly CELL_IMAGE = `url(${startCellImage}`

    movementAllowed(cursor: Cursor)
    {
        return true;
    }
    takeCursor(cursor: Cursor)
    {
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        }    
    }

}

export class FinishCell extends Cell
{
    readonly CELL_COLOR = "#FFFFFF";
    readonly CELL_IMAGE = `url(${finishCellImage}`

    movementAllowed(cursor: Cursor)
    {
        return true;
    }
    takeCursor(cursor: Cursor)
    {
        cursor.puzzleSolved = true;
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        }    
    }
}
