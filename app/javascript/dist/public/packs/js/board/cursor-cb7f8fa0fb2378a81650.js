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
        function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
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
                }, {
                    key: "cursorColor",
                    value: function cursorColor() {
                        var opacity = 0.2;
                        var out = "";
                        switch (this.bitMask) {
                            case 0:
                                out = (_readOnlyError("out"), "rgb(240, 158, 158)");
                                break;
                            case 1:
                                out = (_readOnlyError("out"), "rgb(240, 206, 158)");
                                break;
                            case 2:
                                out = (_readOnlyError("out"), "rgb(240, 229, 158)");
                                break;
                            case 3:
                                out = (_readOnlyError("out"), "rgb(222, 240, 158)");
                                break;
                            case 4:
                                out = (_readOnlyError("out"), "rgb(187, 240, 158)");
                                break;
                            case 5:
                                out = (_readOnlyError("out"), "rgb(158, 240, 200)");
                                break;
                            case 6:
                                out = (_readOnlyError("out"), "rgb(158, 225, 240)");
                                break;
                            case 7:
                                out = (_readOnlyError("out"), "rgb(158, 199, 240)");
                                break;
                            case 8:
                                out = (_readOnlyError("out"), "rgb(158, 188, 240)");
                                break;
                            case 9:
                                out = (_readOnlyError("out"), "rgb(158, 175, 240)");
                                break;
                            case 10:
                                out = (_readOnlyError("out"), "rgb(168, 158, 240)");
                                break;
                            case 11:
                                out = (_readOnlyError("out"), "rgb(192, 158, 240)");
                                break;
                            case 12:
                                out = (_readOnlyError("out"), "rgb(207, 158, 240)");
                                break;
                            case 13:
                                out = (_readOnlyError("out"), "rgb(240, 158, 233)");
                                break;
                            case 14:
                                out = (_readOnlyError("out"), "rgb(240, 158, 185)");
                                break;
                            case 15:
                                out = (_readOnlyError("out"), "rgb(240, 206, 158)");
                                break;
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
//# sourceMappingURL=cursor-cb7f8fa0fb2378a81650.js.map
