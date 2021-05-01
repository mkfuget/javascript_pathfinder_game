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
    /******/ return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/board/cursor.js");
    /******/ 
})({
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
                }], [{
                    key: "keysUnlockedColor",
                    value: function keysUnlockedColor(bitMask) {
                        var out = "";
                        if (bitMask == 0) {
                            out = "rgb(255, 255, 102)";
                        }
                        if (bitMask == 1 || bitMask == 2 || bitMask == 4 || bitMask == 8) {
                            out = "rgb(255, 255, 0)";
                        }
                        if (bitMask == 3 || bitMask == 5 || bitMask == 9 || bitMask == 6 || bitMask == 10 || bitMask == 12) {
                            out = "rgb(255, 204, 0)";
                        }
                        if (bitMask == 7 || bitMask == 11 || bitMask == 13 || bitMask == 14) {
                            out = "rgb(255, 204, 102)";
                        }
                        if (bitMask == 15) {
                            out = "rgb(255, 204, 102)";
                        }
                        return out;
                    }
                }]);
            return Cursor;
        }();
        /* harmony default export */ __webpack_exports__["default"] = (Cursor);
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=cursor-07b96bf2df01a14f1d5c.js.map
