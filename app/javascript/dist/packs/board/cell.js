"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var redKeyImage = require('../../images/red_key.png');
var blueKeyImage = require('../../images/blue_key.png');
var greenKeyImage = require('../../images/green_key.png');
var yellowKeyImage = require('../../images/yellow_key.png');
var redLockImage = require('../../images/red_lock.png');
var blueLockImage = require('../../images/blue_lock.png');
var greenLockImage = require('../../images/green_lock.png');
var yellowLockImage = require('../../images/yellow_lock.png');
var iceCellImage = require('../../images/ice_cell.png');
var wallCellImage = require('../../images/wall_cell.png');
var emptyCellImage = require('../../images/empty_cell.png');
var startCellImage = require('../../images/start_cell.png');
var finishCellImage = require('../../images/finish_cell.png');
var Cell = /** @class */ (function () {
    function Cell(xIndex, yIndex, type) {
        this.xIndex = xIndex;
        this.yIndex = yIndex;
        this.type = type;
    }
    return Cell;
}());
exports.Cell = Cell;
var EmptyCell = /** @class */ (function (_super) {
    __extends(EmptyCell, _super);
    function EmptyCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + emptyCellImage + ")";
        return _this;
    }
    EmptyCell.prototype.movementAllowed = function (cursor) {
        return true;
    };
    EmptyCell.prototype.takeCursor = function (cursor) {
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        };
    };
    return EmptyCell;
}(Cell));
exports.EmptyCell = EmptyCell;
var WallCell = /** @class */ (function (_super) {
    __extends(WallCell, _super);
    function WallCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#000000";
        _this.CELL_IMAGE = "url(" + wallCellImage + ")";
        return _this;
    }
    WallCell.prototype.movementAllowed = function (cursor) {
        return false;
    };
    WallCell.prototype.takeCursor = function (cursor) {
        return {
            type: "failure",
            movementType: "wall",
            deltaX: 0,
            deltaY: 0,
            keysUnlocked: 'none'
        };
    };
    return WallCell;
}(Cell));
exports.WallCell = WallCell;
var LockCell = /** @class */ (function (_super) {
    __extends(LockCell, _super);
    function LockCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockCell.prototype.movementAllowed = function (cursor) {
        return ((cursor.bitMask & this.BIT_VALUE) == this.BIT_VALUE);
    };
    LockCell.prototype.takeCursor = function (cursor) {
        if (!this.movementAllowed(cursor)) {
            return {
                type: "failure",
                movementType: "key not unlocked",
                deltaX: 0,
                deltaY: 0,
                keysUnlocked: 'none'
            };
        }
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        };
    };
    return LockCell;
}(Cell));
exports.LockCell = LockCell;
var KeyCell = /** @class */ (function (_super) {
    __extends(KeyCell, _super);
    function KeyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyCell.prototype.movementAllowed = function (cursor) {
        return true;
    };
    KeyCell.prototype.takeCursor = function (cursor) {
        cursor.bitMask |= this.BIT_VALUE;
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: this.BIT_VALUE
        };
    };
    return KeyCell;
}(Cell));
exports.KeyCell = KeyCell;
var RedLockCell = /** @class */ (function (_super) {
    __extends(RedLockCell, _super);
    function RedLockCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + redLockImage + ")";
        _this.BIT_VALUE = 1;
        return _this;
    }
    return RedLockCell;
}(LockCell));
exports.RedLockCell = RedLockCell;
var RedKeyCell = /** @class */ (function (_super) {
    __extends(RedKeyCell, _super);
    function RedKeyCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + redKeyImage + ")";
        _this.BIT_VALUE = 1;
        return _this;
    }
    return RedKeyCell;
}(KeyCell));
exports.RedKeyCell = RedKeyCell;
var BlueLockCell = /** @class */ (function (_super) {
    __extends(BlueLockCell, _super);
    function BlueLockCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + blueLockImage + ")";
        _this.BIT_VALUE = 2;
        return _this;
    }
    return BlueLockCell;
}(LockCell));
exports.BlueLockCell = BlueLockCell;
var BlueKeyCell = /** @class */ (function (_super) {
    __extends(BlueKeyCell, _super);
    function BlueKeyCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + blueKeyImage + ")";
        _this.BIT_VALUE = 2;
        return _this;
    }
    return BlueKeyCell;
}(KeyCell));
exports.BlueKeyCell = BlueKeyCell;
var GreenLockCell = /** @class */ (function (_super) {
    __extends(GreenLockCell, _super);
    function GreenLockCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + greenLockImage + ")";
        _this.BIT_VALUE = 4;
        return _this;
    }
    return GreenLockCell;
}(LockCell));
exports.GreenLockCell = GreenLockCell;
var GreenKeyCell = /** @class */ (function (_super) {
    __extends(GreenKeyCell, _super);
    function GreenKeyCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + greenKeyImage + ")";
        _this.BIT_VALUE = 4;
        return _this;
    }
    return GreenKeyCell;
}(KeyCell));
exports.GreenKeyCell = GreenKeyCell;
var YellowLockCell = /** @class */ (function (_super) {
    __extends(YellowLockCell, _super);
    function YellowLockCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + yellowLockImage + ")";
        _this.BIT_VALUE = 8;
        return _this;
    }
    return YellowLockCell;
}(LockCell));
exports.YellowLockCell = YellowLockCell;
var YellowKeyCell = /** @class */ (function (_super) {
    __extends(YellowKeyCell, _super);
    function YellowKeyCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + yellowKeyImage + ")";
        _this.BIT_VALUE = 8;
        return _this;
    }
    return YellowKeyCell;
}(KeyCell));
exports.YellowKeyCell = YellowKeyCell;
var IceCell = /** @class */ (function (_super) {
    __extends(IceCell, _super);
    function IceCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#E0FFFF";
        _this.CELL_IMAGE = "url(" + iceCellImage + ")";
        return _this;
    }
    IceCell.prototype.movementAllowed = function (cursor) {
        return true;
    };
    IceCell.prototype.takeCursor = function (cursor, deltaX, deltaY) {
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        var result = cursor.move(deltaX, deltaY);
        return {
            type: "success",
            movementType: "slide",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: result.keysUnlocked
        };
    };
    return IceCell;
}(Cell));
exports.IceCell = IceCell;
var StartCell = /** @class */ (function (_super) {
    __extends(StartCell, _super);
    function StartCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + startCellImage;
        return _this;
    }
    StartCell.prototype.movementAllowed = function (cursor) {
        return true;
    };
    StartCell.prototype.takeCursor = function (cursor) {
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        };
    };
    return StartCell;
}(Cell));
exports.StartCell = StartCell;
var FinishCell = /** @class */ (function (_super) {
    __extends(FinishCell, _super);
    function FinishCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CELL_COLOR = "#FFFFFF";
        _this.CELL_IMAGE = "url(" + finishCellImage;
        return _this;
    }
    FinishCell.prototype.movementAllowed = function (cursor) {
        return true;
    };
    FinishCell.prototype.takeCursor = function (cursor) {
        cursor.puzzleSolved = true;
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        };
    };
    return FinishCell;
}(Cell));
exports.FinishCell = FinishCell;
