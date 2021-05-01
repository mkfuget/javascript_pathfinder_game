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
    /***/ "./app/javascript/images/blue_key.png": 
    /*!********************************************!*\
      !*** ./app/javascript/images/blue_key.png ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/blue_key-9a43c3d3a15acb45f3772a86e1c563f6.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/blue_lock.png": 
    /*!*********************************************!*\
      !*** ./app/javascript/images/blue_lock.png ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/blue_lock-5766557f1ebd9d05d7e219145d5620da.png";
        /***/ 
    }),
    /***/ "./app/javascript/images/empty_cell.png": 
    /*!**********************************************!*\
      !*** ./app/javascript/images/empty_cell.png ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/empty_cell-72da4e879078b9b8fb3d3884cfb64b54.png";
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
    /***/ "./app/javascript/images/green_lock.png": 
    /*!**********************************************!*\
      !*** ./app/javascript/images/green_lock.png ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/green_lock-945bb64a2fcd0f293f83584d14574b9b.png";
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
    /***/ "./app/javascript/images/yellow_lock.png": 
    /*!***********************************************!*\
      !*** ./app/javascript/images/yellow_lock.png ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__.p + "media/images/yellow_lock-b1aee70631877dfed92b7fb1a8309332.png";
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
            function Board(width, height) {
                _classCallCheck(this, Board);
                this.height = height;
                this.width = width;
                this.boardCells = new Array(height);
                for (var i = 0; i < height; i++) {
                    this.boardCells[i] = new Array(width);
                }
                this.startXIndex = 0;
                this.startYIndex = 0;
            }
            _createClass(Board, [{
                    key: "solveMaze",
                    value: function solveMaze(cursor, solveQueue) {
                        var pathTravelled = new Array(this.height);
                        for (var i = 0; i < this.height; i++) {
                            pathTravelled[i] = new Array(this.width);
                        }
                        for (var _i = 0; _i < this.height; _i++) {
                            for (var j = 0; j < this.width; j++) {
                                pathTravelled[_i][j] = new Array(16).fill(false);
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
                            for (var _i2 = 0; _i2 < 4; _i2++) {
                                var currentCursor = cursors[_i2];
                                if (currentCursor.move(deltaXs[_i2], delyaYs[_i2]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask]) {
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
    /*! exports provided: Cell, EmptyCell, WallCell, LockCell, KeyCell, RedLockCell, RedKeyCell, BlueLockCell, BlueKeyCell, GreenLockCell, GreenKeyCell, YellowLockCell, YellowKeyCell, IceCell, StartCell, FinishCell */
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
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowKeyCell", function () { return YellowKeyCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IceCell", function () { return IceCell; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartCell", function () { return StartCell; });
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
        /* harmony import */ var _images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/blue_lock.png */ "./app/javascript/images/blue_lock.png");
        /* harmony import */ var _images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */ var _images_green_lock_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/green_lock.png */ "./app/javascript/images/green_lock.png");
        /* harmony import */ var _images_green_lock_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_images_green_lock_png__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */ var _images_yellow_lock_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/yellow_lock.png */ "./app/javascript/images/yellow_lock.png");
        /* harmony import */ var _images_yellow_lock_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_images_yellow_lock_png__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */ var _images_ice_cell_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/ice_cell.png */ "./app/javascript/images/ice_cell.png");
        /* harmony import */ var _images_ice_cell_png__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_images_ice_cell_png__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/wall_cell.png */ "./app/javascript/images/wall_cell.png");
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_images_wall_cell_png__WEBPACK_IMPORTED_MODULE_9__);
        /* harmony import */ var _images_empty_cell_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/empty_cell.png */ "./app/javascript/images/empty_cell.png");
        /* harmony import */ var _images_empty_cell_png__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(_images_empty_cell_png__WEBPACK_IMPORTED_MODULE_10__);
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
        var Cell = function Cell(xIndex, yIndex, type) {
            _classCallCheck(this, Cell);
            this.xIndex = xIndex;
            this.yIndex = yIndex;
            this.type = type;
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
                        return "url(".concat(_images_empty_cell_png__WEBPACK_IMPORTED_MODULE_10___default.a, ")");
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
                        return "url(".concat(_images_wall_cell_png__WEBPACK_IMPORTED_MODULE_9___default.a, ")");
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
                        return "url(".concat(_images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5___default.a, ")");
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
                        return "url(".concat(_images_green_lock_png__WEBPACK_IMPORTED_MODULE_6___default.a, ")");
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
                        return "url(".concat(_images_yellow_lock_png__WEBPACK_IMPORTED_MODULE_7___default.a, ")");
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 8;
                    }
                }]);
            return YellowLockCell;
        }(LockCell);
        var YellowKeyCell = function (_KeyCell4) {
            _inherits(YellowKeyCell, _KeyCell4);
            var _super12 = _createSuper(YellowKeyCell);
            function YellowKeyCell() {
                _classCallCheck(this, YellowKeyCell);
                return _super12.apply(this, arguments);
            }
            _createClass(YellowKeyCell, [{
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
            return YellowKeyCell;
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
                        return "url(".concat(_images_ice_cell_png__WEBPACK_IMPORTED_MODULE_8___default.a, ")");
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
        var StartCell = function (_Cell6) {
            _inherits(StartCell, _Cell6);
            var _super14 = _createSuper(StartCell);
            function StartCell() {
                _classCallCheck(this, StartCell);
                return _super14.apply(this, arguments);
            }
            _createClass(StartCell, [{
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
            return StartCell;
        }(Cell);
        var FinishCell = function (_Cell7) {
            _inherits(FinishCell, _Cell7);
            var _super15 = _createSuper(FinishCell);
            function FinishCell() {
                _classCallCheck(this, FinishCell);
                return _super15.apply(this, arguments);
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
            function Cursor(board) {
                _classCallCheck(this, Cursor);
                this.xIndex = board.startXIndex;
                this.yIndex = board.startYIndex;
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
                        var out = new Cursor(this.board);
                        out.bitMask = this.bitMask;
                        out.puzzleSolved = this.puzzleSolved;
                        out.stepsTaken = this.stepsTaken;
                        out.xIndex = this.xIndex;
                        out.yIndex = this.yIndex;
                        return out;
                    }
                }, {
                    key: "boardIndex",
                    value: function boardIndex() {
                        return this.board.toBoardIndex(this.xIndex, this.yIndex);
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        this.xIndex = this.board.startXIndex;
                        this.yIndex = this.board.startYIndex;
                        this.bitMask = 0;
                        this.stepsTaken = 0;
                        this.puzzleSolved = false;
                    }
                }, {
                    key: "cursorColor",
                    value: function cursorColor() {
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
        /* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
        /* harmony import */ var _PriorityQueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriorityQueue.js */ "./app/javascript/packs/PriorityQueue.js");
        /* harmony import */ var _board_cell_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/cell.js */ "./app/javascript/packs/board/cell.js");
        /* harmony import */ var _images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/blue_lock.png */ "./app/javascript/images/blue_lock.png");
        /* harmony import */ var _images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_images_blue_lock_png__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */ var _images_red_key_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/red_key.png */ "./app/javascript/images/red_key.png");
        /* harmony import */ var _images_red_key_png__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_images_red_key_png__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/wall_cell.png */ "./app/javascript/images/wall_cell.png");
        /* harmony import */ var _images_wall_cell_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_images_wall_cell_png__WEBPACK_IMPORTED_MODULE_7__);
        var MAZE_HEIGHT = 15;
        var MAZE_WIDTH = 20;
        var START_X_COORDINATE = 15;
        var START_Y_COORDINATE = 35;
        var documentMain = document.querySelector("body");
        window.mouseDown = false;
        document.onmousedown = function () {
            window.mouseDown = true;
        };
        document.onmouseup = function () {
            window.mouseDown = false;
        };
        var userLevelIndex = 0;
        var baseLevelIndex = 0;
        var userLevelMax = 0;
        var baseLevelMax = 0;
        var mode = "base_levels";
        var importData = {};
        var mainBoard = new _board_board_js__WEBPACK_IMPORTED_MODULE_0__["default"](MAZE_WIDTH, MAZE_HEIGHT);
        var mainCursor = new _board_cursor_js__WEBPACK_IMPORTED_MODULE_1__["default"](mainBoard);
        importBoards();
        function importBoards() {
            var url = "api/v1/boards";
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (json) {
                var userLevelCells = [];
                var baseLevelCells = [];
                for (var i = 0; i < json.length; i++) {
                    var _cells = json[i].cells.map(function (x) {
                        return x.cell_type;
                    });
                    if (json[i].board_type === "base") {
                        baseLevelCells.push(_cells);
                    }
                    else if (json[i].board_type === "user") {
                        userLevelCells.push(_cells);
                    }
                }
                importData = {
                    userLevels: userLevelCells,
                    baseLevels: baseLevelCells
                };
                addBoardData(mainBoard, importData.baseLevels[baseLevelIndex]);
                addBoard(mainBoard, mainCursor, importData.baseLevels[baseLevelIndex]);
                userLevelMax = importData.userLevels.length;
                baseLevelMax = importData.baseLevels.length;
                document.getElementById('max_user_level').innerHTML = userLevelMax;
                document.getElementById('max_base_level').innerHTML = baseLevelMax;
                document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
                document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;
                document.getElementById('user_level_down').addEventListener("click", function () {
                    if (userLevelIndex > 0) {
                        addBoardData(mainBoard, importData.userLevels[--userLevelIndex]);
                        addBoard(mainBoard, mainCursor);
                        document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
                    }
                });
                document.getElementById('user_level_up').addEventListener("click", function () {
                    if (userLevelIndex < userLevelMax - 1) {
                        addBoardData(mainBoard, importData.userLevels[++userLevelIndex]);
                        addBoard(mainBoard, mainCursor);
                        document.getElementById('current_user_level').innerHTML = userLevelIndex + 1;
                    }
                });
                document.getElementById('base_level_down').addEventListener("click", function () {
                    if (baseLevelIndex > 0) {
                        addBoardData(mainBoard, importData.baseLevels[--baseLevelIndex]);
                        addBoard(mainBoard, mainCursor);
                        document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;
                    }
                });
                document.getElementById('base_level_up').addEventListener("click", function () {
                    if (baseLevelIndex < baseLevelMax - 1) {
                        addBoardData(mainBoard, importData.baseLevels[++baseLevelIndex]);
                        addBoard(mainBoard, mainCursor);
                        document.getElementById('current_base_level').innerHTML = baseLevelIndex + 1;
                    }
                });
            });
        }
        function dijkstraComparator(cursorA, cursorB) {
            return cursorA.stepsTaken < cursorB.stepsTaken;
        }
        var dijkstraQueue = new _PriorityQueue_js__WEBPACK_IMPORTED_MODULE_3__["default"](dijkstraComparator);
        function mapSymbolToCell(symbol, xIndex, yIndex) {
            switch (symbol) {
                case "E":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["EmptyCell"](xIndex, yIndex, symbol);
                    break;
                case "W":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["WallCell"](xIndex, yIndex, symbol);
                    break;
                case "r":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["RedKeyCell"](xIndex, yIndex, symbol);
                    break;
                case "R":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["RedLockCell"](xIndex, yIndex, symbol);
                    break;
                case "b":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["BlueKeyCell"](xIndex, yIndex, symbol);
                    break;
                case "B":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["BlueLockCell"](xIndex, yIndex, symbol);
                    break;
                case "g":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["GreenKeyCell"](xIndex, yIndex, symbol);
                    break;
                case "G":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["GreenLockCell"](xIndex, yIndex, symbol);
                    break;
                case "y":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["YellowKeyCell"](xIndex, yIndex, symbol);
                    break;
                case "Y":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["YellowLockCell"](xIndex, yIndex, symbol);
                    break;
                case "I":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["IceCell"](xIndex, yIndex, symbol);
                    break;
                case "F":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["FinishCell"](xIndex, yIndex, symbol);
                    break;
                case "S":
                    return new _board_cell_js__WEBPACK_IMPORTED_MODULE_4__["StartCell"](xIndex, yIndex, symbol);
                    break;
            }
        }
        function addCellToBoard(board, xIndex, yIndex) {
            var cellId = "cell_" + (xIndex + yIndex * MAZE_WIDTH);
            var cellImage = "cell_image_" + (xIndex + yIndex * MAZE_WIDTH);
            var mazeCell = document.getElementById(cellId);
            var mazeCellImage = document.getElementById(cellImage);
            var currentCell = board.boardCells[yIndex][xIndex];
            if (currentCell.CELL_IMAGE() !== "none") {
                mazeCellImage.style.background = currentCell.CELL_IMAGE();
            }
            mazeCell.style.backgroundColor = board.boardCells[yIndex][xIndex].CELL_COLOR();
        }
        function clickSetCell(board, xIndex, yIndex) {
            var symbol = document.getElementById('selected_cell').value;
            addCellToBoard(board, symbol, xIndex, yIndex);
        }
        function hoverClickSetCell(board, xIndex, yIndex) {
            if (window.mouseDown === true) {
                clickSetCell(board, xIndex, yIndex);
            }
        }
        function addBoardData(board, cellArray) {
            for (var i = 0; i < board.width * board.height; i++) {
                var symbol = cellArray[i];
                var xIndex = board.indexToXIndex(i);
                var yIndex = board.indexToYIndex(i);
                board.boardCells[yIndex][xIndex] = mapSymbolToCell(symbol, xIndex, yIndex);
                if (symbol === "S") {
                    board.startXIndex = xIndex;
                    board.startYIndex = yIndex;
                }
            }
        } //takes a already filled in board and adds that data to the screen
        function addBoard(board, cursor) {
            var mazeTable = document.getElementById('maze_table');
            var _loop = function _loop(i) {
                var cellId = "cell_" + i;
                var mazeCell = document.getElementById(cellId);
                var xIndex = mainBoard.indexToXIndex(i);
                var yIndex = mainBoard.indexToYIndex(i);
                mazeCell.addEventListener("mouseenter", function () {
                    hoverClickSetCell(board, xIndex, yIndex);
                });
                mazeCell.addEventListener("mousedown", function () {
                    clickSetCell(board, xIndex, yIndex);
                });
                addCellToBoard(board, xIndex, yIndex);
            };
            for (var i = 0; i < board.width * board.height; i++) {
                _loop(i);
            }
            cursor.reset();
            var animatedCursor = document.getElementById('animated_cursor');
            animatedCursor.style.transform = 'translate(0px)';
            animatedCursor.style.left = "".concat(cursor.xIndex + START_X_COORDINATE, "px");
            animatedCursor.style.top = "".concat(cursor.yIndex + START_Y_COORDINATE, "px");
        }
        function exportBoard(board) {
            var url = 'api/v1/boards';
            var cells = [];
            for (var i = 0; i < board.height; i++) {
                for (var j = 0; j < board.width; j++) {
                    cells.push({
                        cell_type: board.boardCells[i][j].type,
                        board_index: board.toBoardIndex(j, i)
                    });
                }
            }
            var boardData = {
                width: board.width,
                height: board.height,
                board_type: "base",
                cells_attributes: cells
            };
            var boardConfigObject = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(boardData)
            };
            fetch(url, boardConfigObject).then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return console.log(json);
            })["catch"](function (error) {
                return alert(error.message);
            });
        } //Takes the result of an attempted move and animates it on the screen
        var animationQueue = [];
        function addToAnimationQueue(moveHash) {
            if (moveHash.type == "success") {
                animationQueue.push(moveHash);
                if (animationQueue.length === 1) {
                    dequeueAnimationQueue();
                }
            }
        }
        function dequeueAnimationQueue() {
            var moveHash = animationQueue[0];
            var animatedCursor = document.getElementById('animated_cursor');
            var deltaXCoord = moveHash.deltaX * 40;
            var deltaYCoord = moveHash.deltaY * 40;
            var animation = Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
                targets: animatedCursor,
                translateX: "+=".concat(deltaXCoord, "px"),
                translateY: "+=".concat(deltaYCoord, "px"),
                easing: 'easeInOutQuad',
                duration: 400
            });
            animation.finished.then(function () {
                animationQueue.shift();
                if (animationQueue.length > 0) {
                    dequeueAnimationQueue();
                }
            });
        }
        function animateSolution(solution) {
            var pathFindingAnimeTimeline = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
                easing: 'linear'
            });
            for (var i = 0; i < solution.searchPath.length; i++) {
                var currentCursor = solution.searchPath[i];
                var boardIndex = mainBoard.toBoardIndex(currentCursor.xIndex, currentCursor.yIndex);
                var cell = document.getElementById("cell_".concat(boardIndex));
                pathFindingAnimeTimeline.add({
                    targets: cell,
                    background: currentCursor.cursorColor(),
                    duration: 300
                }, 75 * i);
            }
            for (var _i = 0; _i < solution.foundPath.length; _i++) {
                var currentCell = solution.foundPath[_i];
                var _boardIndex = mainBoard.toBoardIndex(currentCell.xIndex, currentCell.yIndex);
                var flashColor = '#FFFF00';
                var _cell = document.getElementById("cell_".concat(_boardIndex));
                pathFindingAnimeTimeline.add({
                    targets: _cell,
                    background: flashColor,
                    duration: 300
                }, '-=150');
            }
        }
        document.addEventListener('keypress', function (e) {
            switch (e.key) {
                case "w":
                    addToAnimationQueue(mainCursor.move(0, -1));
                    break;
                case "a":
                    addToAnimationQueue(mainCursor.move(-1, 0));
                    break;
                case "s":
                    addToAnimationQueue(mainCursor.move(0, 1));
                    break;
                case "d":
                    addToAnimationQueue(mainCursor.move(1, 0));
                    break;
                case "p":
                    animateSolution(mainBoard.solveMaze(mainCursor, dijkstraQueue));
                    break;
                case "x":
                    exportBoard(board);
                    break;
                case "c":
                    addBoard(mainBoard, mainCursor, importData.baseLevels[++baseLeveLIndex]);
                    break;
                case "r":
            }
        });
        /***/ 
    }),
    /***/ "./node_modules/animejs/lib/anime.es.js": 
    /*!**********************************************!*\
      !*** ./node_modules/animejs/lib/anime.es.js ***!
      \**********************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /*
         * anime.js v3.2.1
         * (c) 2020 Julian Garnier
         * Released under the MIT license
         * animejs.com
         */
        // Defaults
        var defaultInstanceSettings = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: 'normal',
            autoplay: true,
            timelineOffset: 0
        };
        var defaultTweenSettings = {
            duration: 1000,
            delay: 0,
            endDelay: 0,
            easing: 'easeOutElastic(1, .5)',
            round: 0
        };
        var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching
        var cache = {
            CSS: {},
            springs: {}
        }; // Utils
        function minMax(val, min, max) {
            return Math.min(Math.max(val, min), max);
        }
        function stringContains(str, text) {
            return str.indexOf(text) > -1;
        }
        function applyArguments(func, args) {
            return func.apply(null, args);
        }
        var is = {
            arr: function arr(a) {
                return Array.isArray(a);
            },
            obj: function obj(a) {
                return stringContains(Object.prototype.toString.call(a), 'Object');
            },
            pth: function pth(a) {
                return is.obj(a) && a.hasOwnProperty('totalLength');
            },
            svg: function svg(a) {
                return a instanceof SVGElement;
            },
            inp: function inp(a) {
                return a instanceof HTMLInputElement;
            },
            dom: function dom(a) {
                return a.nodeType || is.svg(a);
            },
            str: function str(a) {
                return typeof a === 'string';
            },
            fnc: function fnc(a) {
                return typeof a === 'function';
            },
            und: function und(a) {
                return typeof a === 'undefined';
            },
            nil: function nil(a) {
                return is.und(a) || a === null;
            },
            hex: function hex(a) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
            },
            rgb: function rgb(a) {
                return /^rgb/.test(a);
            },
            hsl: function hsl(a) {
                return /^hsl/.test(a);
            },
            col: function col(a) {
                return is.hex(a) || is.rgb(a) || is.hsl(a);
            },
            key: function key(a) {
                return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
            }
        }; // Easings
        function parseEasingParameters(string) {
            var match = /\(([^)]+)\)/.exec(string);
            return match ? match[1].split(',').map(function (p) {
                return parseFloat(p);
            }) : [];
        } // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
        function spring(string, duration) {
            var params = parseEasingParameters(string);
            var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
            var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
            var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
            var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
            var w0 = Math.sqrt(stiffness / mass);
            var zeta = damping / (2 * Math.sqrt(stiffness * mass));
            var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
            var a = 1;
            var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
            function solver(t) {
                var progress = duration ? duration * t / 1000 : t;
                if (zeta < 1) {
                    progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
                }
                else {
                    progress = (a + b * progress) * Math.exp(-progress * w0);
                }
                if (t === 0 || t === 1) {
                    return t;
                }
                return 1 - progress;
            }
            function getDuration() {
                var cached = cache.springs[string];
                if (cached) {
                    return cached;
                }
                var frame = 1 / 6;
                var elapsed = 0;
                var rest = 0;
                while (true) {
                    elapsed += frame;
                    if (solver(elapsed) === 1) {
                        rest++;
                        if (rest >= 16) {
                            break;
                        }
                    }
                    else {
                        rest = 0;
                    }
                }
                var duration = elapsed * frame * 1000;
                cache.springs[string] = duration;
                return duration;
            }
            return duration ? solver : getDuration;
        } // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
        function steps(steps) {
            if (steps === void 0)
                steps = 10;
            return function (t) {
                return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
            };
        } // BezierEasing https://github.com/gre/bezier-easing
        var bezier = function () {
            var kSplineTableSize = 11;
            var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
            function A(aA1, aA2) {
                return 1.0 - 3.0 * aA2 + 3.0 * aA1;
            }
            function B(aA1, aA2) {
                return 3.0 * aA2 - 6.0 * aA1;
            }
            function C(aA1) {
                return 3.0 * aA1;
            }
            function calcBezier(aT, aA1, aA2) {
                return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
            }
            function getSlope(aT, aA1, aA2) {
                return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
            }
            function binarySubdivide(aX, aA, aB, mX1, mX2) {
                var currentX, currentT, i = 0;
                do {
                    currentT = aA + (aB - aA) / 2.0;
                    currentX = calcBezier(currentT, mX1, mX2) - aX;
                    if (currentX > 0.0) {
                        aB = currentT;
                    }
                    else {
                        aA = currentT;
                    }
                } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
                return currentT;
            }
            function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
                for (var i = 0; i < 4; ++i) {
                    var currentSlope = getSlope(aGuessT, mX1, mX2);
                    if (currentSlope === 0.0) {
                        return aGuessT;
                    }
                    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                    aGuessT -= currentX / currentSlope;
                }
                return aGuessT;
            }
            function bezier(mX1, mY1, mX2, mY2) {
                if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
                    return;
                }
                var sampleValues = new Float32Array(kSplineTableSize);
                if (mX1 !== mY1 || mX2 !== mY2) {
                    for (var i = 0; i < kSplineTableSize; ++i) {
                        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
                    }
                }
                function getTForX(aX) {
                    var intervalStart = 0;
                    var currentSample = 1;
                    var lastSample = kSplineTableSize - 1;
                    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
                        intervalStart += kSampleStepSize;
                    }
                    --currentSample;
                    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
                    var guessForT = intervalStart + dist * kSampleStepSize;
                    var initialSlope = getSlope(guessForT, mX1, mX2);
                    if (initialSlope >= 0.001) {
                        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
                    }
                    else if (initialSlope === 0.0) {
                        return guessForT;
                    }
                    else {
                        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
                    }
                }
                return function (x) {
                    if (mX1 === mY1 && mX2 === mY2) {
                        return x;
                    }
                    if (x === 0 || x === 1) {
                        return x;
                    }
                    return calcBezier(getTForX(x), mY1, mY2);
                };
            }
            return bezier;
        }();
        var penner = function () {
            // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
            var eases = {
                linear: function linear() {
                    return function (t) {
                        return t;
                    };
                }
            };
            var functionEasings = {
                Sine: function Sine() {
                    return function (t) {
                        return 1 - Math.cos(t * Math.PI / 2);
                    };
                },
                Circ: function Circ() {
                    return function (t) {
                        return 1 - Math.sqrt(1 - t * t);
                    };
                },
                Back: function Back() {
                    return function (t) {
                        return t * t * (3 * t - 2);
                    };
                },
                Bounce: function Bounce() {
                    return function (t) {
                        var pow2, b = 4;
                        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) { }
                        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
                    };
                },
                Elastic: function Elastic(amplitude, period) {
                    if (amplitude === void 0)
                        amplitude = 1;
                    if (period === void 0)
                        period = .5;
                    var a = minMax(amplitude, 1, 10);
                    var p = minMax(period, .1, 2);
                    return function (t) {
                        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
                    };
                }
            };
            var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
            baseEasings.forEach(function (name, i) {
                functionEasings[name] = function () {
                    return function (t) {
                        return Math.pow(t, i + 2);
                    };
                };
            });
            Object.keys(functionEasings).forEach(function (name) {
                var easeIn = functionEasings[name];
                eases['easeIn' + name] = easeIn;
                eases['easeOut' + name] = function (a, b) {
                    return function (t) {
                        return 1 - easeIn(a, b)(1 - t);
                    };
                };
                eases['easeInOut' + name] = function (a, b) {
                    return function (t) {
                        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
                    };
                };
                eases['easeOutIn' + name] = function (a, b) {
                    return function (t) {
                        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
                    };
                };
            });
            return eases;
        }();
        function parseEasings(easing, duration) {
            if (is.fnc(easing)) {
                return easing;
            }
            var name = easing.split('(')[0];
            var ease = penner[name];
            var args = parseEasingParameters(easing);
            switch (name) {
                case 'spring':
                    return spring(easing, duration);
                case 'cubicBezier':
                    return applyArguments(bezier, args);
                case 'steps':
                    return applyArguments(steps, args);
                default:
                    return applyArguments(ease, args);
            }
        } // Strings
        function selectString(str) {
            try {
                var nodes = document.querySelectorAll(str);
                return nodes;
            }
            catch (e) {
                return;
            }
        } // Arrays
        function filterArray(arr, callback) {
            var len = arr.length;
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            var result = [];
            for (var i = 0; i < len; i++) {
                if (i in arr) {
                    var val = arr[i];
                    if (callback.call(thisArg, val, i, arr)) {
                        result.push(val);
                    }
                }
            }
            return result;
        }
        function flattenArray(arr) {
            return arr.reduce(function (a, b) {
                return a.concat(is.arr(b) ? flattenArray(b) : b);
            }, []);
        }
        function toArray(o) {
            if (is.arr(o)) {
                return o;
            }
            if (is.str(o)) {
                o = selectString(o) || o;
            }
            if (o instanceof NodeList || o instanceof HTMLCollection) {
                return [].slice.call(o);
            }
            return [o];
        }
        function arrayContains(arr, val) {
            return arr.some(function (a) {
                return a === val;
            });
        } // Objects
        function cloneObject(o) {
            var clone = {};
            for (var p in o) {
                clone[p] = o[p];
            }
            return clone;
        }
        function replaceObjectProps(o1, o2) {
            var o = cloneObject(o1);
            for (var p in o1) {
                o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
            }
            return o;
        }
        function mergeObjects(o1, o2) {
            var o = cloneObject(o1);
            for (var p in o2) {
                o[p] = is.und(o1[p]) ? o2[p] : o1[p];
            }
            return o;
        } // Colors
        function rgbToRgba(rgbValue) {
            var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
            return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
        }
        function hexToRgba(hexValue) {
            var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            var hex = hexValue.replace(rgx, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });
            var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            var r = parseInt(rgb[1], 16);
            var g = parseInt(rgb[2], 16);
            var b = parseInt(rgb[3], 16);
            return "rgba(" + r + "," + g + "," + b + ",1)";
        }
        function hslToRgba(hslValue) {
            var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
            var h = parseInt(hsl[1], 10) / 360;
            var s = parseInt(hsl[2], 10) / 100;
            var l = parseInt(hsl[3], 10) / 100;
            var a = hsl[4] || 1;
            function hue2rgb(p, q, t) {
                if (t < 0) {
                    t += 1;
                }
                if (t > 1) {
                    t -= 1;
                }
                if (t < 1 / 6) {
                    return p + (q - p) * 6 * t;
                }
                if (t < 1 / 2) {
                    return q;
                }
                if (t < 2 / 3) {
                    return p + (q - p) * (2 / 3 - t) * 6;
                }
                return p;
            }
            var r, g, b;
            if (s == 0) {
                r = g = b = l;
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
        }
        function colorToRgb(val) {
            if (is.rgb(val)) {
                return rgbToRgba(val);
            }
            if (is.hex(val)) {
                return hexToRgba(val);
            }
            if (is.hsl(val)) {
                return hslToRgba(val);
            }
        } // Units
        function getUnit(val) {
            var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
            if (split) {
                return split[1];
            }
        }
        function getTransformUnit(propName) {
            if (stringContains(propName, 'translate') || propName === 'perspective') {
                return 'px';
            }
            if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
                return 'deg';
            }
        } // Values
        function getFunctionValue(val, animatable) {
            if (!is.fnc(val)) {
                return val;
            }
            return val(animatable.target, animatable.id, animatable.total);
        }
        function getAttribute(el, prop) {
            return el.getAttribute(prop);
        }
        function convertPxToUnit(el, value, unit) {
            var valueUnit = getUnit(value);
            if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
                return value;
            }
            var cached = cache.CSS[value + unit];
            if (!is.und(cached)) {
                return cached;
            }
            var baseline = 100;
            var tempEl = document.createElement(el.tagName);
            var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
            parentEl.appendChild(tempEl);
            tempEl.style.position = 'absolute';
            tempEl.style.width = baseline + unit;
            var factor = baseline / tempEl.offsetWidth;
            parentEl.removeChild(tempEl);
            var convertedUnit = factor * parseFloat(value);
            cache.CSS[value + unit] = convertedUnit;
            return convertedUnit;
        }
        function getCSSValue(el, prop, unit) {
            if (prop in el.style) {
                var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
                return unit ? convertPxToUnit(el, value, unit) : value;
            }
        }
        function getAnimationType(el, prop) {
            if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
                return 'attribute';
            }
            if (is.dom(el) && arrayContains(validTransforms, prop)) {
                return 'transform';
            }
            if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
                return 'css';
            }
            if (el[prop] != null) {
                return 'object';
            }
        }
        function getElementTransforms(el) {
            if (!is.dom(el)) {
                return;
            }
            var str = el.style.transform || '';
            var reg = /(\w+)\(([^)]*)\)/g;
            var transforms = new Map();
            var m;
            while (m = reg.exec(str)) {
                transforms.set(m[1], m[2]);
            }
            return transforms;
        }
        function getTransformValue(el, propName, animatable, unit) {
            var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
            var value = getElementTransforms(el).get(propName) || defaultVal;
            if (animatable) {
                animatable.transforms.list.set(propName, value);
                animatable.transforms['last'] = propName;
            }
            return unit ? convertPxToUnit(el, value, unit) : value;
        }
        function getOriginalTargetValue(target, propName, unit, animatable) {
            switch (getAnimationType(target, propName)) {
                case 'transform':
                    return getTransformValue(target, propName, animatable, unit);
                case 'css':
                    return getCSSValue(target, propName, unit);
                case 'attribute':
                    return getAttribute(target, propName);
                default:
                    return target[propName] || 0;
            }
        }
        function getRelativeValue(to, from) {
            var operator = /^(\*=|\+=|-=)/.exec(to);
            if (!operator) {
                return to;
            }
            var u = getUnit(to) || 0;
            var x = parseFloat(from);
            var y = parseFloat(to.replace(operator[0], ''));
            switch (operator[0][0]) {
                case '+':
                    return x + y + u;
                case '-':
                    return x - y + u;
                case '*':
                    return x * y + u;
            }
        }
        function validateValue(val, unit) {
            if (is.col(val)) {
                return colorToRgb(val);
            }
            if (/\s/g.test(val)) {
                return val;
            }
            var originalUnit = getUnit(val);
            var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
            if (unit) {
                return unitLess + unit;
            }
            return unitLess;
        } // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
        // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
        function getDistance(p1, p2) {
            return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        }
        function getCircleLength(el) {
            return Math.PI * 2 * getAttribute(el, 'r');
        }
        function getRectLength(el) {
            return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
        }
        function getLineLength(el) {
            return getDistance({
                x: getAttribute(el, 'x1'),
                y: getAttribute(el, 'y1')
            }, {
                x: getAttribute(el, 'x2'),
                y: getAttribute(el, 'y2')
            });
        }
        function getPolylineLength(el) {
            var points = el.points;
            var totalLength = 0;
            var previousPos;
            for (var i = 0; i < points.numberOfItems; i++) {
                var currentPos = points.getItem(i);
                if (i > 0) {
                    totalLength += getDistance(previousPos, currentPos);
                }
                previousPos = currentPos;
            }
            return totalLength;
        }
        function getPolygonLength(el) {
            var points = el.points;
            return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
        } // Path animation
        function getTotalLength(el) {
            if (el.getTotalLength) {
                return el.getTotalLength();
            }
            switch (el.tagName.toLowerCase()) {
                case 'circle':
                    return getCircleLength(el);
                case 'rect':
                    return getRectLength(el);
                case 'line':
                    return getLineLength(el);
                case 'polyline':
                    return getPolylineLength(el);
                case 'polygon':
                    return getPolygonLength(el);
            }
        }
        function setDashoffset(el) {
            var pathLength = getTotalLength(el);
            el.setAttribute('stroke-dasharray', pathLength);
            return pathLength;
        } // Motion path
        function getParentSvgEl(el) {
            var parentEl = el.parentNode;
            while (is.svg(parentEl)) {
                if (!is.svg(parentEl.parentNode)) {
                    break;
                }
                parentEl = parentEl.parentNode;
            }
            return parentEl;
        }
        function getParentSvg(pathEl, svgData) {
            var svg = svgData || {};
            var parentSvgEl = svg.el || getParentSvgEl(pathEl);
            var rect = parentSvgEl.getBoundingClientRect();
            var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
            var width = rect.width;
            var height = rect.height;
            var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
            return {
                el: parentSvgEl,
                viewBox: viewBox,
                x: viewBox[0] / 1,
                y: viewBox[1] / 1,
                w: width,
                h: height,
                vW: viewBox[2],
                vH: viewBox[3]
            };
        }
        function getPath(path, percent) {
            var pathEl = is.str(path) ? selectString(path)[0] : path;
            var p = percent || 100;
            return function (property) {
                return {
                    property: property,
                    el: pathEl,
                    svg: getParentSvg(pathEl),
                    totalLength: getTotalLength(pathEl) * (p / 100)
                };
            };
        }
        function getPathProgress(path, progress, isPathTargetInsideSVG) {
            function point(offset) {
                if (offset === void 0)
                    offset = 0;
                var l = progress + offset >= 1 ? progress + offset : 0;
                return path.el.getPointAtLength(l);
            }
            var svg = getParentSvg(path.el, path.svg);
            var p = point();
            var p0 = point(-1);
            var p1 = point(+1);
            var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
            var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
            switch (path.property) {
                case 'x':
                    return (p.x - svg.x) * scaleX;
                case 'y':
                    return (p.y - svg.y) * scaleY;
                case 'angle':
                    return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
            }
        } // Decompose value
        function decomposeValue(val, unit) {
            // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
            // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
            var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
            var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
            return {
                original: value,
                numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
                strings: is.str(val) || unit ? value.split(rgx) : []
            };
        } // Animatables
        function parseTargets(targets) {
            var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
            return filterArray(targetsArray, function (item, pos, self) {
                return self.indexOf(item) === pos;
            });
        }
        function getAnimatables(targets) {
            var parsed = parseTargets(targets);
            return parsed.map(function (t, i) {
                return {
                    target: t,
                    id: i,
                    total: parsed.length,
                    transforms: {
                        list: getElementTransforms(t)
                    }
                };
            });
        } // Properties
        function normalizePropertyTweens(prop, tweenSettings) {
            var settings = cloneObject(tweenSettings); // Override duration if easing is a spring
            if (/^spring/.test(settings.easing)) {
                settings.duration = spring(settings.easing);
            }
            if (is.arr(prop)) {
                var l = prop.length;
                var isFromTo = l === 2 && !is.obj(prop[0]);
                if (!isFromTo) {
                    // Duration divided by the number of tweens
                    if (!is.fnc(tweenSettings.duration)) {
                        settings.duration = tweenSettings.duration / l;
                    }
                }
                else {
                    // Transform [from, to] values shorthand to a valid tween value
                    prop = {
                        value: prop
                    };
                }
            }
            var propArray = is.arr(prop) ? prop : [prop];
            return propArray.map(function (v, i) {
                var obj = is.obj(v) && !is.pth(v) ? v : {
                    value: v
                }; // Default delay value should only be applied to the first tween
                if (is.und(obj.delay)) {
                    obj.delay = !i ? tweenSettings.delay : 0;
                } // Default endDelay value should only be applied to the last tween
                if (is.und(obj.endDelay)) {
                    obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
                }
                return obj;
            }).map(function (k) {
                return mergeObjects(k, settings);
            });
        }
        function flattenKeyframes(keyframes) {
            var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
                return Object.keys(key);
            })), function (p) {
                return is.key(p);
            }).reduce(function (a, b) {
                if (a.indexOf(b) < 0) {
                    a.push(b);
                }
                return a;
            }, []);
            var properties = {};
            var loop = function loop(i) {
                var propName = propertyNames[i];
                properties[propName] = keyframes.map(function (key) {
                    var newKey = {};
                    for (var p in key) {
                        if (is.key(p)) {
                            if (p == propName) {
                                newKey.value = key[p];
                            }
                        }
                        else {
                            newKey[p] = key[p];
                        }
                    }
                    return newKey;
                });
            };
            for (var i = 0; i < propertyNames.length; i++) {
                loop(i);
            }
            return properties;
        }
        function getProperties(tweenSettings, params) {
            var properties = [];
            var keyframes = params.keyframes;
            if (keyframes) {
                params = mergeObjects(flattenKeyframes(keyframes), params);
            }
            for (var p in params) {
                if (is.key(p)) {
                    properties.push({
                        name: p,
                        tweens: normalizePropertyTweens(params[p], tweenSettings)
                    });
                }
            }
            return properties;
        } // Tweens
        function normalizeTweenValues(tween, animatable) {
            var t = {};
            for (var p in tween) {
                var value = getFunctionValue(tween[p], animatable);
                if (is.arr(value)) {
                    value = value.map(function (v) {
                        return getFunctionValue(v, animatable);
                    });
                    if (value.length === 1) {
                        value = value[0];
                    }
                }
                t[p] = value;
            }
            t.duration = parseFloat(t.duration);
            t.delay = parseFloat(t.delay);
            return t;
        }
        function normalizeTweens(prop, animatable) {
            var previousTween;
            return prop.tweens.map(function (t) {
                var tween = normalizeTweenValues(t, animatable);
                var tweenValue = tween.value;
                var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
                var toUnit = getUnit(to);
                var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
                var previousValue = previousTween ? previousTween.to.original : originalValue;
                var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
                var fromUnit = getUnit(from) || getUnit(originalValue);
                var unit = toUnit || fromUnit;
                if (is.und(to)) {
                    to = previousValue;
                }
                tween.from = decomposeValue(from, unit);
                tween.to = decomposeValue(getRelativeValue(to, from), unit);
                tween.start = previousTween ? previousTween.end : 0;
                tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
                tween.easing = parseEasings(tween.easing, tween.duration);
                tween.isPath = is.pth(tweenValue);
                tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
                tween.isColor = is.col(tween.from.original);
                if (tween.isColor) {
                    tween.round = 1;
                }
                previousTween = tween;
                return tween;
            });
        } // Tween progress
        var setProgressValue = {
            css: function css(t, p, v) {
                return t.style[p] = v;
            },
            attribute: function attribute(t, p, v) {
                return t.setAttribute(p, v);
            },
            object: function object(t, p, v) {
                return t[p] = v;
            },
            transform: function transform(t, p, v, transforms, manual) {
                transforms.list.set(p, v);
                if (p === transforms.last || manual) {
                    var str = '';
                    transforms.list.forEach(function (value, prop) {
                        str += prop + "(" + value + ") ";
                    });
                    t.style.transform = str;
                }
            }
        }; // Set Value helper
        function setTargetsValue(targets, properties) {
            var animatables = getAnimatables(targets);
            animatables.forEach(function (animatable) {
                for (var property in properties) {
                    var value = getFunctionValue(properties[property], animatable);
                    var target = animatable.target;
                    var valueUnit = getUnit(value);
                    var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
                    var unit = valueUnit || getUnit(originalValue);
                    var to = getRelativeValue(validateValue(value, unit), originalValue);
                    var animType = getAnimationType(target, property);
                    setProgressValue[animType](target, property, to, animatable.transforms, true);
                }
            });
        } // Animations
        function createAnimation(animatable, prop) {
            var animType = getAnimationType(animatable.target, prop.name);
            if (animType) {
                var tweens = normalizeTweens(prop, animatable);
                var lastTween = tweens[tweens.length - 1];
                return {
                    type: animType,
                    property: prop.name,
                    animatable: animatable,
                    tweens: tweens,
                    duration: lastTween.end,
                    delay: tweens[0].delay,
                    endDelay: lastTween.endDelay
                };
            }
        }
        function getAnimations(animatables, properties) {
            return filterArray(flattenArray(animatables.map(function (animatable) {
                return properties.map(function (prop) {
                    return createAnimation(animatable, prop);
                });
            })), function (a) {
                return !is.und(a);
            });
        } // Create Instance
        function getInstanceTimings(animations, tweenSettings) {
            var animLength = animations.length;
            var getTlOffset = function getTlOffset(anim) {
                return anim.timelineOffset ? anim.timelineOffset : 0;
            };
            var timings = {};
            timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
                return getTlOffset(anim) + anim.duration;
            })) : tweenSettings.duration;
            timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
                return getTlOffset(anim) + anim.delay;
            })) : tweenSettings.delay;
            timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
                return getTlOffset(anim) + anim.duration - anim.endDelay;
            })) : tweenSettings.endDelay;
            return timings;
        }
        var instanceID = 0;
        function createNewInstance(params) {
            var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
            var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
            var properties = getProperties(tweenSettings, params);
            var animatables = getAnimatables(params.targets);
            var animations = getAnimations(animatables, properties);
            var timings = getInstanceTimings(animations, tweenSettings);
            var id = instanceID;
            instanceID++;
            return mergeObjects(instanceSettings, {
                id: id,
                children: [],
                animatables: animatables,
                animations: animations,
                duration: timings.duration,
                delay: timings.delay,
                endDelay: timings.endDelay
            });
        } // Core
        var activeInstances = [];
        var engine = function () {
            var raf;
            function play() {
                if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
                    raf = requestAnimationFrame(step);
                }
            }
            function step(t) {
                // memo on algorithm issue:
                // dangerous iteration over mutable `activeInstances`
                // (that collection may be updated from within callbacks of `tick`-ed animation instances)
                var activeInstancesLength = activeInstances.length;
                var i = 0;
                while (i < activeInstancesLength) {
                    var activeInstance = activeInstances[i];
                    if (!activeInstance.paused) {
                        activeInstance.tick(t);
                        i++;
                    }
                    else {
                        activeInstances.splice(i, 1);
                        activeInstancesLength--;
                    }
                }
                raf = i > 0 ? requestAnimationFrame(step) : undefined;
            }
            function handleVisibilityChange() {
                if (!anime.suspendWhenDocumentHidden) {
                    return;
                }
                if (isDocumentHidden()) {
                    // suspend ticks
                    raf = cancelAnimationFrame(raf);
                }
                else {
                    // is back to active tab
                    // first adjust animations to consider the time that ticks were suspended
                    activeInstances.forEach(function (instance) {
                        return instance._onDocumentVisibility();
                    });
                    engine();
                }
            }
            if (typeof document !== 'undefined') {
                document.addEventListener('visibilitychange', handleVisibilityChange);
            }
            return play;
        }();
        function isDocumentHidden() {
            return !!document && document.hidden;
        } // Public Instance
        function anime(params) {
            if (params === void 0)
                params = {};
            var startTime = 0, lastTime = 0, now = 0;
            var children, childrenLength = 0;
            var resolve = null;
            function makePromise(instance) {
                var promise = window.Promise && new Promise(function (_resolve) {
                    return resolve = _resolve;
                });
                instance.finished = promise;
                return promise;
            }
            var instance = createNewInstance(params);
            var promise = makePromise(instance);
            function toggleInstanceDirection() {
                var direction = instance.direction;
                if (direction !== 'alternate') {
                    instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
                }
                instance.reversed = !instance.reversed;
                children.forEach(function (child) {
                    return child.reversed = instance.reversed;
                });
            }
            function adjustTime(time) {
                return instance.reversed ? instance.duration - time : time;
            }
            function resetTime() {
                startTime = 0;
                lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
            }
            function seekChild(time, child) {
                if (child) {
                    child.seek(time - child.timelineOffset);
                }
            }
            function syncInstanceChildren(time) {
                if (!instance.reversePlayback) {
                    for (var i = 0; i < childrenLength; i++) {
                        seekChild(time, children[i]);
                    }
                }
                else {
                    for (var i$1 = childrenLength; i$1--;) {
                        seekChild(time, children[i$1]);
                    }
                }
            }
            function setAnimationsProgress(insTime) {
                var i = 0;
                var animations = instance.animations;
                var animationsLength = animations.length;
                while (i < animationsLength) {
                    var anim = animations[i];
                    var animatable = anim.animatable;
                    var tweens = anim.tweens;
                    var tweenLength = tweens.length - 1;
                    var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween
                    if (tweenLength) {
                        tween = filterArray(tweens, function (t) {
                            return insTime < t.end;
                        })[0] || tween;
                    }
                    var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
                    var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
                    var strings = tween.to.strings;
                    var round = tween.round;
                    var numbers = [];
                    var toNumbersLength = tween.to.numbers.length;
                    var progress = void 0;
                    for (var n = 0; n < toNumbersLength; n++) {
                        var value = void 0;
                        var toNumber = tween.to.numbers[n];
                        var fromNumber = tween.from.numbers[n] || 0;
                        if (!tween.isPath) {
                            value = fromNumber + eased * (toNumber - fromNumber);
                        }
                        else {
                            value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                        }
                        if (round) {
                            if (!(tween.isColor && n > 2)) {
                                value = Math.round(value * round) / round;
                            }
                        }
                        numbers.push(value);
                    } // Manual Array.reduce for better performances
                    var stringsLength = strings.length;
                    if (!stringsLength) {
                        progress = numbers[0];
                    }
                    else {
                        progress = strings[0];
                        for (var s = 0; s < stringsLength; s++) {
                            var a = strings[s];
                            var b = strings[s + 1];
                            var n$1 = numbers[s];
                            if (!isNaN(n$1)) {
                                if (!b) {
                                    progress += n$1 + ' ';
                                }
                                else {
                                    progress += n$1 + b;
                                }
                            }
                        }
                    }
                    setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
                    anim.currentValue = progress;
                    i++;
                }
            }
            function setCallback(cb) {
                if (instance[cb] && !instance.passThrough) {
                    instance[cb](instance);
                }
            }
            function countIteration() {
                if (instance.remaining && instance.remaining !== true) {
                    instance.remaining--;
                }
            }
            function setInstanceProgress(engineTime) {
                var insDuration = instance.duration;
                var insDelay = instance.delay;
                var insEndDelay = insDuration - instance.endDelay;
                var insTime = adjustTime(engineTime);
                instance.progress = minMax(insTime / insDuration * 100, 0, 100);
                instance.reversePlayback = insTime < instance.currentTime;
                if (children) {
                    syncInstanceChildren(insTime);
                }
                if (!instance.began && instance.currentTime > 0) {
                    instance.began = true;
                    setCallback('begin');
                }
                if (!instance.loopBegan && instance.currentTime > 0) {
                    instance.loopBegan = true;
                    setCallback('loopBegin');
                }
                if (insTime <= insDelay && instance.currentTime !== 0) {
                    setAnimationsProgress(0);
                }
                if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
                    setAnimationsProgress(insDuration);
                }
                if (insTime > insDelay && insTime < insEndDelay) {
                    if (!instance.changeBegan) {
                        instance.changeBegan = true;
                        instance.changeCompleted = false;
                        setCallback('changeBegin');
                    }
                    setCallback('change');
                    setAnimationsProgress(insTime);
                }
                else {
                    if (instance.changeBegan) {
                        instance.changeCompleted = true;
                        instance.changeBegan = false;
                        setCallback('changeComplete');
                    }
                }
                instance.currentTime = minMax(insTime, 0, insDuration);
                if (instance.began) {
                    setCallback('update');
                }
                if (engineTime >= insDuration) {
                    lastTime = 0;
                    countIteration();
                    if (!instance.remaining) {
                        instance.paused = true;
                        if (!instance.completed) {
                            instance.completed = true;
                            setCallback('loopComplete');
                            setCallback('complete');
                            if (!instance.passThrough && 'Promise' in window) {
                                resolve();
                                promise = makePromise(instance);
                            }
                        }
                    }
                    else {
                        startTime = now;
                        setCallback('loopComplete');
                        instance.loopBegan = false;
                        if (instance.direction === 'alternate') {
                            toggleInstanceDirection();
                        }
                    }
                }
            }
            instance.reset = function () {
                var direction = instance.direction;
                instance.passThrough = false;
                instance.currentTime = 0;
                instance.progress = 0;
                instance.paused = true;
                instance.began = false;
                instance.loopBegan = false;
                instance.changeBegan = false;
                instance.completed = false;
                instance.changeCompleted = false;
                instance.reversePlayback = false;
                instance.reversed = direction === 'reverse';
                instance.remaining = instance.loop;
                children = instance.children;
                childrenLength = children.length;
                for (var i = childrenLength; i--;) {
                    instance.children[i].reset();
                }
                if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
                    instance.remaining++;
                }
                setAnimationsProgress(instance.reversed ? instance.duration : 0);
            }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
            instance._onDocumentVisibility = resetTime; // Set Value helper
            instance.set = function (targets, properties) {
                setTargetsValue(targets, properties);
                return instance;
            };
            instance.tick = function (t) {
                now = t;
                if (!startTime) {
                    startTime = now;
                }
                setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
            };
            instance.seek = function (time) {
                setInstanceProgress(adjustTime(time));
            };
            instance.pause = function () {
                instance.paused = true;
                resetTime();
            };
            instance.play = function () {
                if (!instance.paused) {
                    return;
                }
                if (instance.completed) {
                    instance.reset();
                }
                instance.paused = false;
                activeInstances.push(instance);
                resetTime();
                engine();
            };
            instance.reverse = function () {
                toggleInstanceDirection();
                instance.completed = instance.reversed ? false : true;
                resetTime();
            };
            instance.restart = function () {
                instance.reset();
                instance.play();
            };
            instance.remove = function (targets) {
                var targetsArray = parseTargets(targets);
                removeTargetsFromInstance(targetsArray, instance);
            };
            instance.reset();
            if (instance.autoplay) {
                instance.play();
            }
            return instance;
        } // Remove targets from animation
        function removeTargetsFromAnimations(targetsArray, animations) {
            for (var a = animations.length; a--;) {
                if (arrayContains(targetsArray, animations[a].animatable.target)) {
                    animations.splice(a, 1);
                }
            }
        }
        function removeTargetsFromInstance(targetsArray, instance) {
            var animations = instance.animations;
            var children = instance.children;
            removeTargetsFromAnimations(targetsArray, animations);
            for (var c = children.length; c--;) {
                var child = children[c];
                var childAnimations = child.animations;
                removeTargetsFromAnimations(targetsArray, childAnimations);
                if (!childAnimations.length && !child.children.length) {
                    children.splice(c, 1);
                }
            }
            if (!animations.length && !children.length) {
                instance.pause();
            }
        }
        function removeTargetsFromActiveInstances(targets) {
            var targetsArray = parseTargets(targets);
            for (var i = activeInstances.length; i--;) {
                var instance = activeInstances[i];
                removeTargetsFromInstance(targetsArray, instance);
            }
        } // Stagger helpers
        function stagger(val, params) {
            if (params === void 0)
                params = {};
            var direction = params.direction || 'normal';
            var easing = params.easing ? parseEasings(params.easing) : null;
            var grid = params.grid;
            var axis = params.axis;
            var fromIndex = params.from || 0;
            var fromFirst = fromIndex === 'first';
            var fromCenter = fromIndex === 'center';
            var fromLast = fromIndex === 'last';
            var isRange = is.arr(val);
            var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
            var val2 = isRange ? parseFloat(val[1]) : 0;
            var unit = getUnit(isRange ? val[1] : val) || 0;
            var start = params.start || 0 + (isRange ? val1 : 0);
            var values = [];
            var maxValue = 0;
            return function (el, i, t) {
                if (fromFirst) {
                    fromIndex = 0;
                }
                if (fromCenter) {
                    fromIndex = (t - 1) / 2;
                }
                if (fromLast) {
                    fromIndex = t - 1;
                }
                if (!values.length) {
                    for (var index = 0; index < t; index++) {
                        if (!grid) {
                            values.push(Math.abs(fromIndex - index));
                        }
                        else {
                            var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                            var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                            var toX = index % grid[0];
                            var toY = Math.floor(index / grid[0]);
                            var distanceX = fromX - toX;
                            var distanceY = fromY - toY;
                            var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                            if (axis === 'x') {
                                value = -distanceX;
                            }
                            if (axis === 'y') {
                                value = -distanceY;
                            }
                            values.push(value);
                        }
                        maxValue = Math.max.apply(Math, values);
                    }
                    if (easing) {
                        values = values.map(function (val) {
                            return easing(val / maxValue) * maxValue;
                        });
                    }
                    if (direction === 'reverse') {
                        values = values.map(function (val) {
                            return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
                        });
                    }
                }
                var spacing = isRange ? (val2 - val1) / maxValue : val1;
                return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
            };
        } // Timeline
        function timeline(params) {
            if (params === void 0)
                params = {};
            var tl = anime(params);
            tl.duration = 0;
            tl.add = function (instanceParams, timelineOffset) {
                var tlIndex = activeInstances.indexOf(tl);
                var children = tl.children;
                if (tlIndex > -1) {
                    activeInstances.splice(tlIndex, 1);
                }
                function passThrough(ins) {
                    ins.passThrough = true;
                }
                for (var i = 0; i < children.length; i++) {
                    passThrough(children[i]);
                }
                var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
                insParams.targets = insParams.targets || params.targets;
                var tlDuration = tl.duration;
                insParams.autoplay = false;
                insParams.direction = tl.direction;
                insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
                passThrough(tl);
                tl.seek(insParams.timelineOffset);
                var ins = anime(insParams);
                passThrough(ins);
                children.push(ins);
                var timings = getInstanceTimings(children, params);
                tl.delay = timings.delay;
                tl.endDelay = timings.endDelay;
                tl.duration = timings.duration;
                tl.seek(0);
                tl.reset();
                if (tl.autoplay) {
                    tl.play();
                }
                return tl;
            };
            return tl;
        }
        anime.version = '3.2.1';
        anime.speed = 1; // TODO:#review: naming, documentation
        anime.suspendWhenDocumentHidden = true;
        anime.running = activeInstances;
        anime.remove = removeTargetsFromActiveInstances;
        anime.get = getOriginalTargetValue;
        anime.set = setTargetsValue;
        anime.convertPx = convertPxToUnit;
        anime.path = getPath;
        anime.setDashoffset = setDashoffset;
        anime.stagger = stagger;
        anime.timeline = timeline;
        anime.easing = parseEasings;
        anime.penner = penner;
        anime.random = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        /* harmony default export */ __webpack_exports__["default"] = (anime);
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=index-af6d199c72a14c222d18.js.map
