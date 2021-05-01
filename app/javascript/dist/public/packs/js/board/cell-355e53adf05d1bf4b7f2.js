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
    /******/ return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/board/cell.js");
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
                        return "#DB7093";
                    }
                }, {
                    key: "BIT_VALUE",
                    value: function BIT_VALUE() {
                        return 1;
                    }
                }, {
                    key: "CELL_IMAGE",
                    value: function CELL_IMAGE() {
                        return "url(".concat(_images_red_lock_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")");
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
//# sourceMappingURL=cell-355e53adf05d1bf4b7f2.js.map
