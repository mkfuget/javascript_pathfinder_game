"use strict";
/******/ (function (modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ }
        /******/ 
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1)
            value = __webpack_require__(value);
        /******/ if (mode & 8)
            return value;
        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ return ns;
        /******/ 
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter = module && module.__esModule ?
            /******/ function getDefault() { return module['default']; } :
            /******/ function getModuleExports() { return module; };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/ 
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "/packs/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
    /******/ 
})({
    /***/ "./app/javascript/packs/PriorityQueue.js": 
    /*!***********************************************!*\
      !*** ./app/javascript/packs/PriorityQueue.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } }
        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        } }
        function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
            _defineProperties(Constructor.prototype, protoProps); if (staticProps)
            _defineProperties(Constructor, staticProps); return Constructor; }
        var PriorityQueue = function () {
            function PriorityQueue() {
                var comparator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (a, b) {
                    return a > b;
                };
                _classCallCheck(this, PriorityQueue);
                this.heap = [];
                this.comparator = comparator;
            }
            _createClass(PriorityQueue, [{
                    key: "size",
                    value: function size() {
                        return this.heap.length;
                    }
                }, {
                    key: "parent",
                    value: function parent(i) {
                        return Math.floor((i - 1) / 2);
                    }
                }, {
                    key: "left",
                    value: function left(i) {
                        return 2 * i + 1;
                    }
                }, {
                    key: "right",
                    value: function right(i) {
                        return 2 * (i + 1);
                    }
                }, {
                    key: "peek",
                    value: function peek() {
                        return this.heap[0];
                    }
                }, {
                    key: "push",
                    value: function push(value) {
                        this.heap.push(value);
                        this.buddleUp(this.size() - 1);
                    }
                }, {
                    key: "pop",
                    value: function pop() {
                        var outValue = this.peek();
                        this.swap(0, this.size() - 1);
                        this.heap.pop();
                        this.bubbleDown(0);
                    }
                }, {
                    key: "swap",
                    value: function swap(i, j) {
                        var _ref = [this.heap[j], this.heap[i]];
                        this.heap[i] = _ref[0];
                        this.heap[j] = _ref[1];
                    }
                }, {
                    key: "bubbleUp",
                    value: function bubbleUp(i) {
                        while (i > 0 && this.comparator(this.heap[i], this.heap[this.parent(i)])) {
                            this.swap(i, this.parent(i));
                            i = this.parent(i);
                        }
                    }
                }, {
                    key: "buddleDown",
                    value: function buddleDown(i) {
                        while (this.left(i) < this.size()) {
                            var child = i;
                            if (this.right(i) < this.size() && this.comparator(this.heap[this.right(i)], this.heap[child])) {
                                child = this.right(i);
                            }
                            if (this.comparator(this.heap[this.left(i)], this.heap[child])) {
                                child = this.left(i);
                            }
                            this.swap(i, child);
                            i = child;
                        }
                    }
                }]);
            return PriorityQueue;
        }();
        /***/ 
    }),
    /***/ "./app/javascript/packs/board/board.js": 
    /*!*********************************************!*\
      !*** ./app/javascript/packs/board/board.js ***!
      \*********************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ "./app/javascript/packs/board/cell.js");
        /* harmony import */ var _PriorityQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PriorityQueue.js */ "./app/javascript/packs/PriorityQueue.js");
        /* harmony import */ var _PriorityQueue_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_PriorityQueue_js__WEBPACK_IMPORTED_MODULE_1__);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } }
        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        } }
        function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
            _defineProperties(Constructor.prototype, protoProps); if (staticProps)
            _defineProperties(Constructor, staticProps); return Constructor; }
        var Board = function () {
            function Board(width, height, boardData) {
                _classCallCheck(this, Board);
                this.height = height;
                this.width = width;
                this.boardCells = new Array(height);
                for (var i = 0; i < height; i++) {
                    this.boardCells[i] = new Array(width);
                }
                for (var _i = 0; _i < height; _i++) {
                    for (var j = 0; j < width; j++) {
                        switch (boardData[_i][j]) {
                            case 0:
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["EmptyCell"](j, _i);
                                break;
                            case undefined:
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["WallCell"](j, _i);
                                break;
                            case 1:
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["WallCell"](j, _i);
                                break;
                            case "r":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["RedKey"](j, _i);
                                break;
                            case "R":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["RedCell"](j, _i);
                                break;
                            case "i":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["IceCell"](j, _i);
                                break;
                            case "f":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["FinishCell"](j, _i);
                                break;
                        }
                    }
                }
            }
            _createClass(Board, [{
                    key: "solveMaze",
                    value: function solveMaze(cursor, solveQueue) {
                        var pathTravelled = new Array(this.height);
                        for (var i = 0; i < this.height; i++) {
                            pathTravelled[i] = new Array(this.width);
                        }
                        for (var _i2 = 0; _i2 < this.height; _i2++) {
                            for (var j = 0; j < this.width; j++) {
                                pathTravelled[_i2][j] = new Array(16).fill(false);
                            }
                        }
                        var solveOrder = [];
                        pathTravelled[cursor.yIndex][cursor.xIndex][cursor.bitMask] = "Start Square";
                        solveQueue.push(cursor);
                        solveOrder.push(cursor);
                        while (!solveOrder[0].puzzleSolved && !solveQueue.length == 0) {
                            var firstCursor = solveQueue.pop();
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
                            for (var _i3 = 0; _i3 < 4; _i3++) {
                                var currentCursor = cursors[_i3];
                                if (currentCursor.move(deltaXs[_i3], delyaYs[_i3]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask]) {
                                    solveQueue.push(currentCursor);
                                    solveOrder.push(currentCursor);
                                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] = {
                                        lastXIndex: currentXindex,
                                        lastYIndex: currentYindex,
                                        lastBitMask: currentBitMask
                                    };
                                }
                            }
                        }
                        var finish = solveOrder[solveQueue.length - 1];
                        var shortestPath = [];
                        if (finish.puzzleSolved) { }
                        return;
                        {
                            searchPath: solveOrder;
                        }
                    }
                }, {
                    key: "indexToXIndex",
                    value: function indexToXIndex(index) {
                        return index % this.width;
                    }
                }, {
                    key: "indexToYIndex",
                    value: function indexToYIndex(index) {
                        return Math.floor(index / this.width);
                    }
                }, {
                    key: "toBoardIndex",
                    value: function toBoardIndex(xIndex, yIndex) {
                        return xIndex + this.height * yIndex;
                    }
                }]);
            return Board;
        }();
        /* harmony default export */ __webpack_exports__["default"] = (Board);
        /***/ 
    }),
    /***/ "./app/javascript/packs/board/cell.js": 
    /*!********************************************!*\
      !*** ./app/javascript/packs/board/cell.js ***!
      \********************************************/
    /*! exports provided: Cell, EmptyCell, WallCell, RedCell, RedKey, IceCell, FinishCell */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function () { return Cell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCell", function () { return EmptyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallCell", function () { return WallCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedCell", function () { return RedCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedKey", function () { return RedKey; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IceCell", function () { return IceCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishCell", function () { return FinishCell; });
        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        } }
        function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
            _defineProperties(Constructor.prototype, protoProps); if (staticProps)
            _defineProperties(Constructor, staticProps); return Constructor; }
        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass)
            _setPrototypeOf(subClass, superClass); }
        function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
        function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        }
        else {
            result = Super.apply(this, arguments);
        } return _possibleConstructorReturn(this, result); }; }
        function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        } return _assertThisInitialized(self); }
        function _assertThisInitialized(self) { if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        } return self; }
        function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct)
            return false; if (Reflect.construct.sham)
            return false; if (typeof Proxy === "function")
            return true; try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
            return true;
        }
        catch (e) {
            return false;
        } }
        function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } }
        var Cell = function Cell(xIndex, yIndex) {
            _classCallCheck(this, Cell);
            this.xIndex = xIndex;
            this.yIndex = yIndex;
        };
        var EmptyCell = function (_Cell) {
            _inherits(EmptyCell, _Cell);
            var _super = _createSuper(EmptyCell);
            function EmptyCell() {
                _classCallCheck(this, EmptyCell);
                return _super.apply(this, arguments);
            }
            _createClass(EmptyCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "white";
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return true;
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor) {
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
                    }
                }]);
            return EmptyCell;
        }(Cell);
        var WallCell = function (_Cell2) {
            _inherits(WallCell, _Cell2);
            var _super2 = _createSuper(WallCell);
            function WallCell() {
                _classCallCheck(this, WallCell);
                return _super2.apply(this, arguments);
            }
            _createClass(WallCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "black";
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return false;
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor) {
                        return {
                            type: "failure",
                            reason: "wall"
                        };
                    }
                }]);
            return WallCell;
        }(Cell);
        var RedCell = function (_Cell3) {
            _inherits(RedCell, _Cell3);
            var _super3 = _createSuper(RedCell);
            function RedCell() {
                _classCallCheck(this, RedCell);
                return _super3.apply(this, arguments);
            }
            _createClass(RedCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "PaleVioletRed";
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 1;
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return (cursor.bitMask & this.BIT_VALUE()) == this.BIT_VALUE();
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor) {
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
                    }
                }]);
            return RedCell;
        }(Cell);
        var RedKey = function (_Cell4) {
            _inherits(RedKey, _Cell4);
            var _super4 = _createSuper(RedKey);
            function RedKey() {
                _classCallCheck(this, RedKey);
                return _super4.apply(this, arguments);
            }
            _createClass(RedKey, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "red";
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 1;
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return true;
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor) {
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
                            keysUnlocked: "red"
                        };
                    }
                }]);
            return RedKey;
        }(Cell);
        var IceCell = function (_Cell5) {
            _inherits(IceCell, _Cell5);
            var _super5 = _createSuper(IceCell);
            function IceCell() {
                _classCallCheck(this, IceCell);
                return _super5.apply(this, arguments);
            }
            _createClass(IceCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "LightCyan";
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return true;
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor, deltaX, deltaY) {
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
                    }
                }]);
            return IceCell;
        }(Cell);
        var FinishCell = function (_Cell6) {
            _inherits(FinishCell, _Cell6);
            var _super6 = _createSuper(FinishCell);
            function FinishCell() {
                _classCallCheck(this, FinishCell);
                return _super6.apply(this, arguments);
            }
            _createClass(FinishCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "#B0B0B0";
                    }
                }, {
                    key: "movementAllowed",
                    value: function movementAllowed(cursor) {
                        return true;
                    }
                }, {
                    key: "takeCursor",
                    value: function takeCursor(cursor) {
                        cursor.puzzleSolved = true;
                        var xStart = cursor.xIndex;
                        var yStart = cursor.yIndex;
                        cursor.xIndex = this.xIndex;
                        cursor.yIndex = this.yIndex;
                        return {
                            type: "success",
                            movementType: "slide",
                            deltaX: cursor.xIndex - xStart,
                            deltaY: cursor.yIndex - yStart,
                            keysUnlocked: "none"
                        };
                    }
                }]);
            return FinishCell;
        }(Cell);
        /***/ 
    }),
    /***/ "./app/javascript/packs/board/cursor.js": 
    /*!**********************************************!*\
      !*** ./app/javascript/packs/board/cursor.js ***!
      \**********************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } }
        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        } }
        function _createClass(Constructor, protoProps, staticProps) { if (protoProps)
            _defineProperties(Constructor.prototype, protoProps); if (staticProps)
            _defineProperties(Constructor, staticProps); return Constructor; }
        var Cursor = function () {
            function Cursor(xIndex, yIndex, board) {
                _classCallCheck(this, Cursor);
                this.xIndex = xIndex;
                this.yIndex = yIndex;
                this.board = board;
                this.bitMask = 0;
                this.stepsTaken = 0;
                this.puzzleSolved = false;
            }
            _createClass(Cursor, [{
                    key: "boardHeight",
                    value: function boardHeight() {
                        return this.board.height;
                    }
                }, {
                    key: "boardWidth",
                    value: function boardWidth() {
                        return this.board.width;
                    }
                }, {
                    key: "move",
                    value: function move(deltaX, deltaY) {
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
                    }
                }, {
                    key: "index",
                    value: function index() {
                        return this.xIndex + this.yIndex * this.board.height;
                    }
                }, {
                    key: "copyConstructor",
                    value: function copyConstructor() {
                        var out = new Cursor(this.xIndex, this.yIndex, this.board);
                        out.bitMask = this.bitMask;
                        out.puzzleSolved = this.puzzleSolved;
                        out.stepsTaken = this.stepsTaken;
                        return out;
                    }
                }, {
                    key: "boardIndex",
                    value: function boardIndex() {
                        return this.board.toBoardIndex(this.xIndex, this.yIndex);
                    }
                }]);
            return Cursor;
        }();
        /* harmony default export */ __webpack_exports__["default"] = (Cursor);
        /***/ 
    }),
    /***/ "./app/javascript/packs/index.js": 
    /*!***************************************!*\
      !*** ./app/javascript/packs/index.js ***!
      \***************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _board_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/board.js */ "./app/javascript/packs/board/board.js");
        /* harmony import */ var _board_cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/cursor.js */ "./app/javascript/packs/board/cursor.js");
        var MAZE_HEIGHT = 15;
        var MAZE_WIDTH = 20;
        var documentMain = document.querySelector("body");
        var mazeSquares = [[0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 0, "i", 0, 0, "f", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, "i", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ["r", 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, "R", "R", "R", "R", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        var board = new _board_board_js__WEBPACK_IMPORTED_MODULE_0__["default"](MAZE_WIDTH, MAZE_HEIGHT, mazeSquares);
        var testCursor = new _board_cursor_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, board);
        function addBoard(board) {
            var mazeTable = document.getElementById('maze_table');
            var animatedCursor = document.createElement('div');
            animatedCursor.id = "animated_cursor";
            animatedCursor.style.left = '10px';
            animatedCursor.style.top = '10px';
            mazeTable.append(animatedCursor);
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < 20; j++) {
                    var mazeCell = document.getElementById("cell_" + (j + i * MAZE_WIDTH));
                    newBoardCell.style.backgroundColor = maze.boardCells[i][j].CELL_COLOR();
                }
            }
        }
        addBoard(board);
        function flashCell(cellIndex, color) {
            var deltaOpacity = 0.025;
            var opacity = 0;
            var cell = document.getElementById("cell_" + cellIndex);
            var startingBackgroundColor = cell.style.backgroundColor;
            var startingOpacity = cell.style.opacity;
            cell.style.backgroundColor = color;
            var timer = window.setInterval(function () {
                cell.style.opacity = opacity;
                opacity += deltaOpacity;
                if (opacity > 0.7) {
                    deltaOpacity *= -1;
                }
                if (opacity < 0) {
                    window.clearInterval(timer);
                    cell.style.opacity = startingOpacity;
                    cell.style.backgroundColor = startingBackgroundColor;
                }
            }, 16);
        } //Takes the result of an attempted move and animates it on the screen
        function moveAnimatedCursor(moveHash) {
            if (moveHash.type == "success") {
                var animatedCursor = document.getElementById('animated_cursor');
                var xCoordinate = parseInt(animatedCursor.style.left.replace('px', ''), 10);
                var yCoordinate = parseInt(animatedCursor.style.top.replace('px', ''), 10);
                animatedCursor.style.top = "".concat(yCoordinate + moveHash.deltaY * 43, "px");
                animatedCursor.style.left = "".concat(xCoordinate + moveHash.deltaX * 43, "px");
            }
        }
        function animateSoluction(solution) {
            var i = 0;
            var timer = window.setInterval(function () {
                flashCell(solution[i].boardIndex(), "red");
                i++;
                if (i >= solution.length) {
                    window.clearInterval(timer);
                }
            }, 400);
        }
        document.addEventListener('keypress', function (e) {
            switch (e.key) {
                case "w":
                    moveAnimatedCursor(testCursor.move(0, -1));
                    break;
                case "a":
                    moveAnimatedCursor(testCursor.move(-1, 0));
                    break;
                case "s":
                    moveAnimatedCursor(testCursor.move(0, 1));
                    break;
                case "d":
                    moveAnimatedCursor(testCursor.move(1, 0));
                    break;
                case "p":
                    animateSoluction(maze.solveMaze(testCursor));
            }
        });
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=index-0e313060bbdf9b43d351.js.map
