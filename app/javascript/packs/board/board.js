import * as cells from "./cell.js"
import PriorityQueue from "../PriorityQueue.js"
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
                switch(boardData[i][j])
                {
                    case 0:
                        this.boardCells[i][j] = new cells.EmptyCell(j, i)
                        break;
                    case undefined:
                        this.boardCells[i][j] = new cells.WallCell(j, i)
                        break;
                    case 1:
                        this.boardCells[i][j] = new cells.WallCell(j, i)
                        break;
                    case "r":
                        this.boardCells[i][j] = new cells.RedKey(j, i)
                        break;
                    case "R":
                        this.boardCells[i][j] = new cells.RedCell(j, i)
                        break;
                    case "i":
                        this.boardCells[i][j] = new cells.IceCell(j, i)
                        break;
                    case "f":
                        this.boardCells[i][j] = new cells.FinishCell(j, i)
                        break;

                }
            }
        }

    }
    solveMaze(cursor, solveQueue)//returns one array of the squares in the path finding algorithm and one for the shortest path solution 
    {
        let pathTravelled = new Array(this.height)
        for(let i=0; i<this.height; i++)//initialize a 3-d array that corresponding to every square on the board and a third index for the bitmask value
        {
            pathTravelled[i] = new Array(this.width)
        }
        for(let i=0; i<this.height; i++)
        {
            for(let j=0; j<this.width; j++)
            {
                pathTravelled[i][j] = new Array(16).fill(false)
            }
        }
        let solveOrder = [];
        pathTravelled[cursor.yIndex][cursor.xIndex][cursor.bitMask] = "Start Square"
        solveQueue.push(cursor);
        do 
        {
            const firstCursor = solveQueue.pop();
            solveOrder.push(firstCursor);

            const currentXindex = firstCursor.xIndex;
            const currentYindex = firstCursor.yIndex;
            const currentBitMask = firstCursor.bitMask;

            let leftCursor = firstCursor.copyConstructor();
            let rightCursor = firstCursor.copyConstructor();
            let upCursor = firstCursor.copyConstructor();
            let downCursor = firstCursor.copyConstructor();
            const cursors = [rightCursor, downCursor, leftCursor, upCursor];
            const deltaXs = [1, 0, -1, 0];
            const delyaYs = [0, 1, 0, -1];
            for(let i =0; i<4; i++)
            {
                let currentCursor = cursors[i]
                if(currentCursor.move(deltaXs[i], delyaYs[i]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask])
                {
                    solveQueue.push(currentCursor);
                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] = 
                    {
                        lastXIndex: currentXindex,
                        lastYIndex: currentYindex,
                        lastBitMask:  currentBitMask,
                    }
                }    
            } 
        } while(!solveOrder[solveOrder.length - 1].puzzleSolved && !solveQueue.empty())
        let finishCursor = solveOrder[solveOrder.length - 1];
        let currentCell = pathTravelled[finishCursor.yIndex][finishCursor.xIndex][finishCursor.bitMask];
        let pathFound = [];
        if(finishCursor.puzzleSolved)
        {
            while(currentCell!="Start Square")
            {
                pathFound.unshift({
                    xIndex: currentCell.lastXIndex,
                    yIndex: currentCell.lastYIndex
                })
                currentCell = pathTravelled[currentCell.lastYIndex][currentCell.lastXIndex][currentCell.lastBitMask]    
            }
        }
        return{
            searchPath: solveOrder,
            foundPath: pathFound
        } 
    }
    indexToXIndex(index)
    {
        return index%this.width;
    }
    indexToYIndex(index)
    {
        return Math.floor(index/this.width);
    }
    toBoardIndex(xIndex, yIndex)
    {
        return xIndex + this.height*yIndex;
    }
}
export default Board;