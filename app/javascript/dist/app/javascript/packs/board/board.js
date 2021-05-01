"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue_js_1 = __importDefault(require("../PriorityQueue.js"));
var Board = /** @class */ (function () {
    function Board(width, height) {
        this.height = height;
        this.width = width;
        this.boardCells = new Array(height);
        for (var i = 0; i < height; i++) {
            this.boardCells[i] = new Array(width);
        }
        this.startXIndex = 0;
        this.startYIndex = 0;
        this.finishXIndex = width;
        this.finishYIndex = height;
    }
    Board.prototype.solveMaze = function (cursor, solveQueue) {
        var pathTravelled = new Array(this.height);
        for (var i = 0; i < this.height; i++) {
            pathTravelled[i] = new Array(this.width);
        }
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                pathTravelled[i][j] = new Array(16).fill(false);
            }
        }
        var solveOrder = [];
        pathTravelled[cursor.yIndex][cursor.xIndex][cursor.bitMask] = "Start Square";
        solveQueue.push(cursor);
        do {
            var firstCursor = solveQueue.pop();
            solveOrder.push(firstCursor);
            var currentXindex = firstCursor.xIndex;
            var currentYindex = firstCursor.yIndex;
            var currentBitMask = firstCursor.bitMask;
            var leftCursor = firstCursor.copyConstructor();
            var rightCursor = firstCursor.copyConstructor();
            var upCursor = firstCursor.copyConstructor();
            var downCursor = firstCursor.copyConstructor();
            var cursors = [rightCursor, downCursor, leftCursor, upCursor];
            var deltaXs = [1, 0, -1, 0];
            var delyaYs = [0, 1, 0, -1];
            for (var i = 0; i < 4; i++) {
                var currentCursor = cursors[i];
                if (currentCursor.move(deltaXs[i], delyaYs[i]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask]) {
                    solveQueue.push(currentCursor);
                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] =
                        {
                            lastXIndex: currentXindex,
                            lastYIndex: currentYindex,
                            lastBitMask: currentBitMask,
                        };
                }
            }
        } while (!solveOrder[solveOrder.length - 1].puzzleSolved && !solveQueue.empty());
        var finishCursor = solveOrder[solveOrder.length - 1];
        var currentCell = pathTravelled[finishCursor.yIndex][finishCursor.xIndex][finishCursor.bitMask];
        var pathFound = [
            {
                xIndex: finishCursor.xIndex,
                yIndex: finishCursor.yIndex,
                bitMask: finishCursor.bitMask
            }
        ];
        if (finishCursor.puzzleSolved) {
            while (currentCell != "Start Square") {
                pathFound.push({
                    xIndex: currentCell.lastXIndex,
                    yIndex: currentCell.lastYIndex,
                    bitMask: currentCell.lastBitMask
                });
                currentCell = pathTravelled[currentCell.lastYIndex][currentCell.lastXIndex][currentCell.lastBitMask];
            }
        }
        return {
            searchPath: solveOrder,
            foundPath: pathFound.reverse()
        };
    };
    Board.prototype.dijsktra = function (cursor) {
        function dijkstraComparator(cursorA, cursorB) {
            return cursorA.stepsTaken < cursorB.stepsTaken;
        }
        var dijkstraQueue = new PriorityQueue_js_1.default(dijkstraComparator);
        return this.solveMaze(cursor, dijkstraQueue);
    };
    Board.prototype.depthFirstSearch = function (cursor) {
        function depthFirstSearchComparator(cursorA, cursorB) {
            return cursorA.stepsTaken > cursorB.stepsTaken;
        }
        var depthFirstSearchQueue = new PriorityQueue_js_1.default(depthFirstSearchComparator);
        return this.solveMaze(cursor, depthFirstSearchQueue);
    };
    Board.prototype.manhattanDistanceToFinish = function (xIndex, yIndex) {
        return (Math.abs(xIndex - this.finishXIndex) + Math.abs(yIndex - this.finishYIndex));
    };
    Board.prototype.aStarSearch = function (cursor, weight) {
        function aStarSearchComparator(cursorA, cursorB) {
            var aStarDistanceA = cursorA.stepsTaken + weight * cursorA.board.manhattanDistanceToFinish(cursorA.xIndex, cursorA.yIndex);
            var aStarDistanceB = cursorB.stepsTaken + weight * cursorB.board.manhattanDistanceToFinish(cursorB.xIndex, cursorB.yIndex);
            return (aStarDistanceA === aStarDistanceB ? (cursorA.stepsTaken < cursorB.stepsTaken) : (aStarDistanceA < aStarDistanceB));
        }
        var aStarSearcQueue = new PriorityQueue_js_1.default(aStarSearchComparator);
        return this.solveMaze(cursor, aStarSearcQueue);
    };
    Board.prototype.indexToXIndex = function (index) {
        return index % this.width;
    };
    Board.prototype.indexToYIndex = function (index) {
        return Math.floor(index / this.width);
    };
    Board.prototype.toBoardIndex = function (xIndex, yIndex) {
        return xIndex + this.width * yIndex;
    };
    return Board;
}());
exports.default = Board;
