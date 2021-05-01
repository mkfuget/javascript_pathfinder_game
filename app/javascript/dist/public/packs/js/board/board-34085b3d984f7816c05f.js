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
        /* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_cell_js__WEBPACK_IMPORTED_MODULE_0__);
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
    /*! no static exports found */
    /***/ (function (module, exports) {
        throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/app/javascript/packs/board/cell.js: Identifier 'EmptyCell' has already been declared (196:13)\n\n  194 |     }\n  195 | }\n> 196 | export class EmptyCell extends Cell\n      |              ^\n  197 | {\n  198 |     CELL_COLOR(){return \"#B0B0B0\";}\n  199 |     CELL_IMAGE(){return \"none\"}\n    at Parser._raise (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:737:17)\n    at ScopeHandler.checkRedeclarationInScope (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:1453:12)\n    at ScopeHandler.declareName (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:1419:12)\n    at Parser.checkLVal (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:10202:24)\n    at Parser.parseClassId (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13262:14)\n    at Parser.parseClass (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12944:10)\n    at Parser.parseStatementContent (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12237:21)\n    at Parser.parseStatement (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12195:17)\n    at Parser.parseExportDeclaration (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13409:17)\n    at Parser.maybeParseExportDeclaration (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13365:31)\n    at Parser.parseExport (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13303:29)\n    at Parser.parseStatementContent (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12301:27)\n    at Parser.parseStatement (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12195:17)\n    at Parser.parseBlockOrModuleBlockBody (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12777:25)\n    at Parser.parseBlockBody (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12768:10)\n    at Parser.parseProgram (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12129:10)\n    at Parser.parseTopLevel (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:12120:25)\n    at Parser.parse (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13836:10)\n    at parse (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/parser/lib/index.js:13889:38)\n    at parser (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/mnt/c/Users/micha/OneDrive/Documents/GitHub/javascript_pathfinder_game/node_modules/gensync/index.js:261:32)");
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=board-34085b3d984f7816c05f.js.map
