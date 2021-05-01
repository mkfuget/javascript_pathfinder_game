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
    /******/ return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/board/board.js");
    /******/ 
})({
    /***/ "./app/javascript/images/blue_key.png": 
    /*!********************************************!*\
      !*** ./app/javascript/images/blue_key.png ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/blue_key-9a43c3d3a15acb45f3772a86e1c563f6.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/green_key.png": 
    /*!*********************************************!*\
      !*** ./app/javascript/images/green_key.png ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/green_key-10ce887717ba94731d2d07c12bec4105.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/ice_cell.png": 
    /*!********************************************!*\
      !*** ./app/javascript/images/ice_cell.png ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/ice_cell-68dc2ffd1cc0d1f396865c75533db34c.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/red_key.png": 
    /*!*******************************************!*\
      !*** ./app/javascript/images/red_key.png ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/red_key-00aa79596976e6bd96f7057244034031.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/red_lock.png": 
    /*!********************************************!*\
      !*** ./app/javascript/images/red_lock.png ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/red_lock-80f35620fed90c34e7afbd3f8ad3c3a2.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/wall_cell.png": 
    /*!*********************************************!*\
      !*** ./app/javascript/images/wall_cell.png ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/wall_cell-ecc8cbca92d31a7709eb55d32ab31e5d.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/yellow_key.png": 
    /*!**********************************************!*\
      !*** ./app/javascript/images/yellow_key.png ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/yellow_key-bf4fac491002d4eea49a0ab3dbae47cf.png";
        /***/ 
    }),
    /***/ "./app/javascript/packs/PriorityQueue.js": 
    /*!***********************************************!*\
      !*** ./app/javascript/packs/PriorityQueue.js ***!
      \***********************************************/
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
                    key: "empty",
                    value: function empty() {
                        return this.heap.length === 0;
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
                        this.bubbleUp(this.size() - 1);
                    }
                }, {
                    key: "pop",
                    value: function pop() {
                        var outValue = this.peek();
                        this.swap(0, this.size() - 1);
                        this.heap.pop();
                        this.bubbleDown(0);
                        return outValue;
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
                    key: "bubbleDown",
                    value: function bubbleDown(i) {
                        while (this.left(i) < this.size()) {
                            var child = i;
                            if (this.right(i) < this.size() && this.comparator(this.heap[this.right(i)], this.heap[child])) {
                                child = this.right(i);
                            }
                            if (this.comparator(this.heap[this.left(i)], this.heap[child])) {
                                child = this.left(i);
                            }
                            if (i == child) {
                                break;
                            }
                            this.swap(i, child);
                            i = child;
                        }
                    }
                }]);
            return PriorityQueue;
        }();
        /* harmony default export */ __webpack_exports__["default"] = (PriorityQueue);
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
                            case 1:
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["WallCell"](j, _i);
                                break;
                            case "r":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["RedKeyCell"](j, _i);
                                break;
                            case "R":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["RedLockCell"](j, _i);
                                break;
                            case "b":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["BlueKeyCell"](j, _i);
                                break;
                            case "B":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["BlueLockCell"](j, _i);
                                break;
                            case "g":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["GreenKeyCell"](j, _i);
                                break;
                            case "G":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["GreenLockCell"](j, _i);
                                break;
                            case "y":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["YellowKeyCell"](j, _i);
                                break;
                            case "Y":
                                this.boardCells[_i][j] = new _cell_js__WEBPACK_IMPORTED_MODULE_0__["YellowLockCell"](j, _i);
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
                            for (var _i3 = 0; _i3 < 4; _i3++) {
                                var currentCursor = cursors[_i3];
                                if (currentCursor.move(deltaXs[_i3], delyaYs[_i3]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask]) {
                                    solveQueue.push(currentCursor);
                                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] = {
                                        lastXIndex: currentXindex,
                                        lastYIndex: currentYindex,
                                        lastBitMask: currentBitMask
                                    };
                                }
                            }
                        } while (!solveOrder[solveOrder.length - 1].puzzleSolved && !solveQueue.empty());
                        var finishCursor = solveOrder[solveOrder.length - 1];
                        var currentCell = pathTravelled[finishCursor.yIndex][finishCursor.xIndex][finishCursor.bitMask];
                        var pathFound = [];
                        if (finishCursor.puzzleSolved) {
                            while (currentCell != "Start Square") {
                                pathFound.unshift({
                                    xIndex: currentCell.lastXIndex,
                                    yIndex: currentCell.lastYIndex
                                });
                                currentCell = pathTravelled[currentCell.lastYIndex][currentCell.lastXIndex][currentCell.lastBitMask];
                            }
                        }
                        return {
                            searchPath: solveOrder,
                            foundPath: pathFound
                        };
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
                        return xIndex + this.width * yIndex;
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
    /*! exports provided: Cell, EmptyCell, WallCell, LockCell, KeyCell, RedLockCell, RedKeyCell, BlueLockCell, BlueKeyCell, GreenLockCell, GreenKeyCell, YellowLockCell, YelloweKeyCell, IceCell, FinishCell */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function () { return Cell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCell", function () { return EmptyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallCell", function () { return WallCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockCell", function () { return LockCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCell", function () { return KeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedLockCell", function () { return RedLockCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedKeyCell", function () { return RedKeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueLockCell", function () { return BlueLockCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueKeyCell", function () { return BlueKeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenLockCell", function () { return GreenLockCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenKeyCell", function () { return GreenKeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowLockCell", function () { return YellowLockCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YelloweKeyCell", function () { return YelloweKeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IceCell", function () { return IceCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishCell", function () { return FinishCell; });
        /* harmony import */ var _images_red_key_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/red_key.png */ "./app/javascript/images/red_key.png");
        /* harmony import */ var _images_red_key_png__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_images_red_key_png__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */ var _images_blue_key_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/blue_key.png */ "./app/javascript/images/blue_key.png");
        /* harmony import */ var _images_blue_key_png__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_images_blue_key_png__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var _images_green_key_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/green_key.png */ "./app/javascript/images/green_key.png");
        /* harmony import */ var _images_green_key_png__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_images_green_key_png__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */ var _images_yellow_key_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/yellow_key.png */ "./app/javascript/images/yellow_key.png");
        /* harmony import */ var _images_yellow_key_png__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_images_yellow_key_png__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */ var _images_red_lock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/red_lock.png */ "./app/javascript/images/red_lock.png");
        /* harmony import */ var _images_red_lock_png__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_images_red_lock_png__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */ var _images_ice_cell_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/ice_cell.png */ "./app/javascript/images/ice_cell.png");
        /* harmony import */ var _images_ice_cell_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_images_ice_cell_png__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/wall_cell.png */ "./app/javascript/images/wall_cell.png");
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_images_wall_cell_png__WEBPACK_IMPORTED_MODULE_6__);
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
                        return "#FFFFFF";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "none";
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
                        return "#000000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_wall_cell_png__WEBPACK_IMPORTED_MODULE_6___default.a, ")");
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
        var LockCell = function (_Cell3) {
            _inherits(LockCell, _Cell3);
            var _super3 = _createSuper(LockCell);
            function LockCell() {
                _classCallCheck(this, LockCell);
                return _super3.apply(this, arguments);
            }
            _createClass(LockCell, [{
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
            return LockCell;
        }(Cell);
        var KeyCell = function (_Cell4) {
            _inherits(KeyCell, _Cell4);
            var _super4 = _createSuper(KeyCell);
            function KeyCell() {
                _classCallCheck(this, KeyCell);
                return _super4.apply(this, arguments);
            }
            _createClass(KeyCell, [{
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
            return KeyCell;
        }(Cell);
        var RedLockCell = function (_LockCell) {
            _inherits(RedLockCell, _LockCell);
            var _super5 = _createSuper(RedLockCell);
            function RedLockCell() {
                _classCallCheck(this, RedLockCell);
                return _super5.apply(this, arguments);
            }
            _createClass(RedLockCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_red_lock_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 1;
                    }
                }]);
            return RedLockCell;
        }(LockCell);
        var RedKeyCell = function (_KeyCell) {
            _inherits(RedKeyCell, _KeyCell);
            var _super6 = _createSuper(RedKeyCell);
            function RedKeyCell() {
                _classCallCheck(this, RedKeyCell);
                return _super6.apply(this, arguments);
            }
            _createClass(RedKeyCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_red_key_png__WEBPACK_IMPORTED_MODULE_0___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 1;
                    }
                }]);
            return RedKeyCell;
        }(KeyCell);
        var BlueLockCell = function (_LockCell2) {
            _inherits(BlueLockCell, _LockCell2);
            var _super7 = _createSuper(BlueLockCell);
            function BlueLockCell() {
                _classCallCheck(this, BlueLockCell);
                return _super7.apply(this, arguments);
            }
            _createClass(BlueLockCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(blueLockImage, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 2;
                    }
                }]);
            return BlueLockCell;
        }(LockCell);
        var BlueKeyCell = function (_KeyCell2) {
            _inherits(BlueKeyCell, _KeyCell2);
            var _super8 = _createSuper(BlueKeyCell);
            function BlueKeyCell() {
                _classCallCheck(this, BlueKeyCell);
                return _super8.apply(this, arguments);
            }
            _createClass(BlueKeyCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_blue_key_png__WEBPACK_IMPORTED_MODULE_1___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 2;
                    }
                }]);
            return BlueKeyCell;
        }(KeyCell);
        var GreenLockCell = function (_LockCell3) {
            _inherits(GreenLockCell, _LockCell3);
            var _super9 = _createSuper(GreenLockCell);
            function GreenLockCell() {
                _classCallCheck(this, GreenLockCell);
                return _super9.apply(this, arguments);
            }
            _createClass(GreenLockCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(greemLockImage, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 4;
                    }
                }]);
            return GreenLockCell;
        }(LockCell);
        var GreenKeyCell = function (_KeyCell3) {
            _inherits(GreenKeyCell, _KeyCell3);
            var _super10 = _createSuper(GreenKeyCell);
            function GreenKeyCell() {
                _classCallCheck(this, GreenKeyCell);
                return _super10.apply(this, arguments);
            }
            _createClass(GreenKeyCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_green_key_png__WEBPACK_IMPORTED_MODULE_2___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 4;
                    }
                }]);
            return GreenKeyCell;
        }(KeyCell);
        var YellowLockCell = function (_LockCell4) {
            _inherits(YellowLockCell, _LockCell4);
            var _super11 = _createSuper(YellowLockCell);
            function YellowLockCell() {
                _classCallCheck(this, YellowLockCell);
                return _super11.apply(this, arguments);
            }
            _createClass(YellowLockCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(yellowLockImage, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 8;
                    }
                }]);
            return YellowLockCell;
        }(LockCell);
        var YelloweKeyCell = function (_KeyCell4) {
            _inherits(YelloweKeyCell, _KeyCell4);
            var _super12 = _createSuper(YelloweKeyCell);
            function YelloweKeyCell() {
                _classCallCheck(this, YelloweKeyCell);
                return _super12.apply(this, arguments);
            }
            _createClass(YelloweKeyCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "FF0000";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_yellow_key_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 8;
                    }
                }]);
            return YelloweKeyCell;
        }(KeyCell);
        var IceCell = function (_Cell5) {
            _inherits(IceCell, _Cell5);
            var _super13 = _createSuper(IceCell);
            function IceCell() {
                _classCallCheck(this, IceCell);
                return _super13.apply(this, arguments);
            }
            _createClass(IceCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "#E0FFFF";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_ice_cell_png__WEBPACK_IMPORTED_MODULE_5___default.a, ")");
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
            var _super14 = _createSuper(FinishCell);
            function FinishCell() {
                _classCallCheck(this, FinishCell);
                return _super14.apply(this, arguments);
            }
            _createClass(FinishCell, [{
                    key: "CELL_COLOR",
                    value: function CELL_COLOR() {
                        return "#B0B0B0";
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "none";
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
    })
    /******/ 
});
//# sourceMappingURL=board-acfa50c9e744052f2528.js.map
