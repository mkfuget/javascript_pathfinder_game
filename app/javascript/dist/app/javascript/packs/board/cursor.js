"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cursor = /** @class */ (function () {
    function Cursor(board) {
        this.xIndex = board.startXIndex;
        this.yIndex = board.startYIndex;
        this.board = board;
        this.bitMask = 0;
        this.stepsTaken = 0;
        this.puzzleSolved = false;
    }
    Cursor.prototype.boardHeight = function () { return this.board.height; };
    Cursor.prototype.boardWidth = function () { return this.board.width; };
    Cursor.prototype.move = function (deltaX, deltaY) {
        var xDestination = this.xIndex + deltaX;
        var yDestination = this.yIndex + deltaY;
        if (xDestination < 0 || yDestination < 0 || xDestination >= this.boardWidth() || yDestination >= this.boardHeight()) {
            return {
                type: "failure",
                reason: "index out of bounds"
            };
        }
        var moveOutcome = this.board.boardCells[yDestination][xDestination].takeCursor(this, deltaX, deltaY);
        if (moveOutcome.type == "success") {
            this.stepsTaken++;
        }
        return moveOutcome;
    };
    Cursor.prototype.index = function () {
        return this.xIndex + this.yIndex * this.board.height;
    };
    Cursor.prototype.copyConstructor = function () {
        var out = new Cursor(this.board);
        out.bitMask = this.bitMask;
        out.puzzleSolved = this.puzzleSolved;
        out.stepsTaken = this.stepsTaken;
        out.xIndex = this.xIndex;
        out.yIndex = this.yIndex;
        return out;
    };
    Cursor.prototype.boardIndex = function () {
        return this.board.toBoardIndex(this.xIndex, this.yIndex);
    };
    Cursor.prototype.reset = function () {
        this.xIndex = this.board.startXIndex;
        this.yIndex = this.board.startYIndex;
        this.bitMask = 0;
        this.stepsTaken = 0;
        this.puzzleSolved = false;
    };
    Cursor.prototype.cursorColor = function () {
        var out = "";
        switch (this.bitMask) {
            case 0:
                out = "rgb(201, 8, 8)";
                break;
            case 1:
                out = "rgb(8, 198, 201)";
                break;
            case 2:
                out = "rgb(8, 140, 201)";
                break;
            case 3:
                out = "rgb(201, 102, 8)";
                break;
            case 4:
                out = "rgb(8, 95, 201)";
                break;
            case 5:
                out = "rgb(201, 179, 8)";
                break;
            case 6:
                out = "rgb(201, 201, 8)";
                break;
            case 7:
                out = "rgb(53, 8, 201)";
                break;
            case 8:
                out = "rgb(8, 31, 201)";
                break;
            case 9:
                out = "rgb(163, 201, 8)";
                break;
            case 10:
                out = "rgb(124, 201, 8)";
                break;
            case 11:
                out = "rgb(192, 158, 240)";
                break;
            case 12:
                out = "rgb(114, 8, 201)";
                break;
            case 13:
                out = "rgb(176, 8, 201)";
                break;
            case 14:
                out = "rgb(201, 8, 140)";
                break;
            case 15:
                out = "rgb(8, 201, 137)";
                break;
        }
        return out;
    };
    Cursor.keysUnlockedColor = function (bitMask) {
        var out = "";
        if (bitMask == 0) {
            out = "rgb(255, 255, 0)";
        }
        if (bitMask == 1 || bitMask == 2 || bitMask == 4 || bitMask == 8) {
            out = "rgb(255, 204, 0)";
        }
        if (bitMask == 3 || bitMask == 5 || bitMask == 9 || bitMask == 6 || bitMask == 10 || bitMask == 12) {
            out = "rgb(255, 153, 51)";
        }
        if (bitMask == 7 || bitMask == 11 || bitMask == 13 || bitMask == 14) {
            out = "rgb(255, 102, 0)";
        }
        if (bitMask == 15) {
            out = "rgb(255, 51, 0)";
        }
        return out;
    };
    return Cursor;
}());
exports.default = Cursor;
