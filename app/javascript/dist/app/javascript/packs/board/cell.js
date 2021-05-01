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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var red_key_png_1 = __importDefault(require("../../images/red_key.png"));
var blue_key_png_1 = __importDefault(require("../../images/blue_key.png"));
var green_key_png_1 = __importDefault(require("../../images/green_key.png"));
var yellow_key_png_1 = __importDefault(require("../../images/yellow_key.png"));
var red_lock_png_1 = __importDefault(require("../../images/red_lock.png"));
var blue_lock_png_1 = __importDefault(require("../../images/blue_lock.png"));
var green_lock_png_1 = __importDefault(require("../../images/green_lock.png"));
var yellow_lock_png_1 = __importDefault(require("../../images/yellow_lock.png"));
var ice_cell_png_1 = __importDefault(require("../../images/ice_cell.png"));
var wall_cell_png_1 = __importDefault(require("../../images/wall_cell.png"));
var empty_cell_png_1 = __importDefault(require("../../images/empty_cell.png"));
var start_cell_png_1 = __importDefault(require("../../images/start_cell.png"));
var finish_cell_png_1 = __importDefault(require("../../images/finish_cell.png"));
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    EmptyCell.prototype.CELL_IMAGE = function () { return "url(" + empty_cell_png_1.default + ")"; };
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WallCell.prototype.CELL_COLOR = function () { return "#000000"; };
    WallCell.prototype.CELL_IMAGE = function () { return "url(" + wall_cell_png_1.default + ")"; };
    WallCell.prototype.movementAllowed = function (cursor) {
        return false;
    };
    WallCell.prototype.takeCursor = function (cursor) {
        return {
            type: "failure",
            reason: "wall"
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
        return ((cursor.bitMask & this.BIT_VALUE()) == this.BIT_VALUE());
    };
    LockCell.prototype.takeCursor = function (cursor) {
        if (!this.movementAllowed(cursor)) {
            return {
                type: "failure",
                reason: "key not unlocked"
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
        cursor.bitMask |= this.BIT_VALUE();
        var xStart = cursor.xIndex;
        var yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: this.BIT_VALUE()
        };
    };
    return KeyCell;
}(Cell));
exports.KeyCell = KeyCell;
var RedLockCell = /** @class */ (function (_super) {
    __extends(RedLockCell, _super);
    function RedLockCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedLockCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    RedLockCell.prototype.CELL_IMAGE = function () { return "url(" + red_lock_png_1.default + ")"; };
    RedLockCell.prototype.BIT_VALUE = function () { return 1; };
    return RedLockCell;
}(LockCell));
exports.RedLockCell = RedLockCell;
var RedKeyCell = /** @class */ (function (_super) {
    __extends(RedKeyCell, _super);
    function RedKeyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedKeyCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    RedKeyCell.prototype.CELL_IMAGE = function () { return "url(" + red_key_png_1.default + ")"; };
    RedKeyCell.prototype.BIT_VALUE = function () { return 1; };
    return RedKeyCell;
}(KeyCell));
exports.RedKeyCell = RedKeyCell;
var BlueLockCell = /** @class */ (function (_super) {
    __extends(BlueLockCell, _super);
    function BlueLockCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueLockCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    BlueLockCell.prototype.CELL_IMAGE = function () { return "url(" + blue_lock_png_1.default + ")"; };
    BlueLockCell.prototype.BIT_VALUE = function () { return 2; };
    return BlueLockCell;
}(LockCell));
exports.BlueLockCell = BlueLockCell;
var BlueKeyCell = /** @class */ (function (_super) {
    __extends(BlueKeyCell, _super);
    function BlueKeyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueKeyCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    BlueKeyCell.prototype.CELL_IMAGE = function () { return "url(" + blue_key_png_1.default + ")"; };
    BlueKeyCell.prototype.BIT_VALUE = function () { return 2; };
    return BlueKeyCell;
}(KeyCell));
exports.BlueKeyCell = BlueKeyCell;
var GreenLockCell = /** @class */ (function (_super) {
    __extends(GreenLockCell, _super);
    function GreenLockCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreenLockCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    GreenLockCell.prototype.CELL_IMAGE = function () { return "url(" + green_lock_png_1.default + ")"; };
    GreenLockCell.prototype.BIT_VALUE = function () { return 4; };
    return GreenLockCell;
}(LockCell));
exports.GreenLockCell = GreenLockCell;
var GreenKeyCell = /** @class */ (function (_super) {
    __extends(GreenKeyCell, _super);
    function GreenKeyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreenKeyCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    GreenKeyCell.prototype.CELL_IMAGE = function () { return "url(" + green_key_png_1.default + ")"; };
    GreenKeyCell.prototype.BIT_VALUE = function () { return 4; };
    return GreenKeyCell;
}(KeyCell));
exports.GreenKeyCell = GreenKeyCell;
var YellowLockCell = /** @class */ (function (_super) {
    __extends(YellowLockCell, _super);
    function YellowLockCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YellowLockCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    YellowLockCell.prototype.CELL_IMAGE = function () { return "url(" + yellow_lock_png_1.default + ")"; };
    YellowLockCell.prototype.BIT_VALUE = function () { return 8; };
    return YellowLockCell;
}(LockCell));
exports.YellowLockCell = YellowLockCell;
var YellowKeyCell = /** @class */ (function (_super) {
    __extends(YellowKeyCell, _super);
    function YellowKeyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YellowKeyCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    YellowKeyCell.prototype.CELL_IMAGE = function () { return "url(" + yellow_key_png_1.default + ")"; };
    YellowKeyCell.prototype.BIT_VALUE = function () { return 8; };
    return YellowKeyCell;
}(KeyCell));
exports.YellowKeyCell = YellowKeyCell;
var IceCell = /** @class */ (function (_super) {
    __extends(IceCell, _super);
    function IceCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IceCell.prototype.CELL_COLOR = function () { return "#E0FFFF"; };
    IceCell.prototype.CELL_IMAGE = function () { return "url(" + ice_cell_png_1.default + ")"; };
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    StartCell.prototype.CELL_IMAGE = function () { return "url(" + start_cell_png_1.default; };
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinishCell.prototype.CELL_COLOR = function () { return "#FFFFFF"; };
    ;
    FinishCell.prototype.CELL_IMAGE = function () { return "url(" + finish_cell_png_1.default; };
    ;
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
