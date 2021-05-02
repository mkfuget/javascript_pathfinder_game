"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var board_js_1 = __importDefault(require("./board/board.js"));
var cursor_js_1 = __importDefault(require("./board/cursor.js"));
var anime = require('animejs/lib/anime.es.js');
var cells = __importStar(require("./board/cell.js"));
var MAZE_HEIGHT = 15;
var MAZE_WIDTH = 20;
var START_X_COORDINATE = 15;
var START_Y_COORDINATE = 35;
var CELL_WIDTH = 40;
var EMPTY_CELL_ARRAY = Array(MAZE_HEIGHT * MAZE_WIDTH).fill('E');
var mouseDown = false;
document.onmousedown = function () {
    mouseDown = true;
};
document.onmouseup = function () {
    mouseDown = false;
};
var userLevelIndex = 0;
var baseLevelIndex = 0;
var userLevelMax = 0;
var baseLevelMax = 0;
var gameMode = "baseLevels";
var importData;
var darkMode = true;
var mainBoard = new board_js_1.default(MAZE_WIDTH, MAZE_HEIGHT);
var mainCursor = new cursor_js_1.default(mainBoard);
importBoards();
function importBoards() {
    var url = "api/v1/boards";
    fetch(url)
        .then(function (response) {
        return response.json();
    }).then(function (json) {
        var userLevelCells = [];
        var baseLevelCells = [];
        for (var i = 0; i < json.length; i++) {
            var cells_1 = json[i].cells.map(function (val, index) {
                return val.cell_type;
            });
            if (json[i].board_type === "base") {
                baseLevelCells.push(cells_1);
            }
            else if (json[i].board_type === "user") {
                userLevelCells.push(cells_1);
            }
        }
        if (baseLevelCells.length === 0) {
            baseLevelCells.push(EMPTY_CELL_ARRAY);
        }
        if (userLevelCells.length === 0) {
            userLevelCells.push(EMPTY_CELL_ARRAY);
        }
        importData.userLevels = userLevelCells;
        importData.baseLevels = baseLevelCells;
        addBoardData(mainBoard, importData.baseLevels[baseLevelIndex]);
        addBoard(mainBoard, mainCursor);
        userLevelMax = importData.userLevels.length;
        baseLevelMax = importData.baseLevels.length;
        var maxUserLevelElement = document.getElementById('max_user_level');
        if (maxUserLevelElement instanceof HTMLElement) {
            maxUserLevelElement.innerHTML = String(userLevelMax);
        }
        var maxBaseLevelElement = document.getElementById('max_base_level');
        if (maxBaseLevelElement instanceof HTMLElement) {
            maxBaseLevelElement.innerHTML = String(baseLevelMax);
        }
        var currentUserLevelElement = document.getElementById('current_user_level');
        if (currentUserLevelElement instanceof HTMLElement) {
            currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
        }
        var currentBaseLevelElement = document.getElementById('current_base_level');
        if (currentBaseLevelElement instanceof HTMLElement) {
            currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
        }
        var userLevelDownButton = document.getElementById('user_level_down');
        if (userLevelDownButton instanceof HTMLElement) {
            userLevelDownButton.addEventListener("click", function () {
                if (userLevelIndex > 0) {
                    addBoardData(mainBoard, importData.userLevels[--userLevelIndex]);
                    addBoard(mainBoard, mainCursor);
                    if (currentUserLevelElement instanceof HTMLElement) {
                        currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
                    }
                }
            });
        }
        var userLevelUpButton = document.getElementById('user_level_up');
        if (userLevelUpButton instanceof HTMLElement) {
            userLevelUpButton.addEventListener("click", function () {
                if (userLevelIndex < userLevelMax - 1) {
                    addBoardData(mainBoard, importData.userLevels[++userLevelIndex]);
                    addBoard(mainBoard, mainCursor);
                    if (currentUserLevelElement instanceof HTMLElement) {
                        currentUserLevelElement.innerHTML = String(userLevelIndex + 1);
                    }
                }
            });
        }
        var baseLevelDownButton = document.getElementById('base_level_down');
        if (baseLevelDownButton instanceof HTMLElement) {
            baseLevelDownButton.addEventListener("click", function () {
                if (baseLevelIndex > 0) {
                    addBoardData(mainBoard, importData.baseLevels[--baseLevelIndex]);
                    addBoard(mainBoard, mainCursor);
                    if (currentBaseLevelElement instanceof HTMLElement) {
                        currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
                    }
                }
            });
        }
        var baseLevelUpButton = document.getElementById('base_level_up');
        if (baseLevelUpButton instanceof HTMLElement) {
            baseLevelUpButton.addEventListener("click", function () {
                if (baseLevelIndex < baseLevelMax - 1) {
                    addBoardData(mainBoard, importData.baseLevels[++baseLevelIndex]);
                    addBoard(mainBoard, mainCursor);
                    if (currentBaseLevelElement instanceof HTMLElement) {
                        currentBaseLevelElement.innerHTML = String(baseLevelIndex + 1);
                    }
                }
            });
        }
        setGameMode('baseLevels');
        var UserLevelsButton = document.getElementById('user_levels_button');
        if (UserLevelsButton instanceof HTMLElement) {
            UserLevelsButton.addEventListener("click", function () { setGameMode('userLevels'); });
        }
        var baseLevelsButton = document.getElementById('base_levels_button');
        if (baseLevelsButton instanceof HTMLElement) {
            baseLevelsButton.addEventListener("click", function () { setGameMode('baseLevels'); });
        }
        var EditModeButton = document.getElementById('edit_mode_button');
        if (EditModeButton instanceof HTMLElement) {
            EditModeButton.addEventListener("click", function () { setGameMode('editMode'); });
        }
    });
}
function mapSymbolToCell(symbol, xIndex, yIndex) {
    switch (symbol) {
        case "E":
            return new cells.EmptyCell(xIndex, yIndex, symbol);
            break;
        case "W":
            return new cells.WallCell(xIndex, yIndex, symbol);
            break;
        case "r":
            return new cells.RedKeyCell(xIndex, yIndex, symbol);
            break;
        case "R":
            return new cells.RedLockCell(xIndex, yIndex, symbol);
            break;
        case "b":
            return new cells.BlueKeyCell(xIndex, yIndex, symbol);
            break;
        case "B":
            return new cells.BlueLockCell(xIndex, yIndex, symbol);
            break;
        case "g":
            return new cells.GreenKeyCell(xIndex, yIndex, symbol);
            break;
        case "G":
            return new cells.GreenLockCell(xIndex, yIndex, symbol);
            break;
        case "y":
            return new cells.YellowKeyCell(xIndex, yIndex, symbol);
            break;
        case "Y":
            return new cells.YellowLockCell(xIndex, yIndex, symbol);
            break;
        case "I":
            return new cells.IceCell(xIndex, yIndex, symbol);
            break;
        case "F":
            return new cells.FinishCell(xIndex, yIndex, symbol);
            break;
        case "S":
            return new cells.StartCell(xIndex, yIndex, symbol);
            break;
        default:
            return new cells.EmptyCell(xIndex, yIndex, symbol);
            break;
    }
}
function addCellToBoard(board, xIndex, yIndex) {
    var cellId = "cell_" + (xIndex + yIndex * MAZE_WIDTH);
    var cellImage = "cell_image_" + (xIndex + yIndex * MAZE_WIDTH);
    var mazeCell = document.getElementById(cellId);
    var mazeCellImage = document.getElementById(cellImage);
    var currentCell = board.boardCells[yIndex][xIndex];
    if (currentCell.CELL_IMAGE !== "none" && mazeCellImage instanceof HTMLElement) {
        mazeCellImage.style.background = currentCell.CELL_IMAGE;
    }
    if (mazeCell instanceof HTMLElement) {
        mazeCell.style.backgroundColor = board.boardCells[yIndex][xIndex].CELL_COLOR;
    }
}
function clickSetCell(board, xIndex, yIndex) {
    var selectedCell = document.getElementById('selected_cell');
    if (selectedCell instanceof HTMLInputElement) {
        var symbol = selectedCell.value;
        addCellData(board, symbol, board.toBoardIndex(xIndex, yIndex));
        addCellToBoard(board, xIndex, yIndex);
    }
}
function hoverClickSetCell(board, xIndex, yIndex) {
    if (mouseDown === true) {
        clickSetCell(board, xIndex, yIndex);
    }
}
function addCellData(board, symbol, i) {
    var xIndex = board.indexToXIndex(i);
    var yIndex = board.indexToYIndex(i);
    board.boardCells[yIndex][xIndex] = mapSymbolToCell(symbol, xIndex, yIndex);
    if (symbol === "S") {
        board.startXIndex = xIndex;
        board.startYIndex = yIndex;
    }
    if (symbol === "F") {
        board.finishXIndex = xIndex;
        board.finishYIndex = yIndex;
    }
}
function addBoardData(board, cellArray) {
    for (var i = 0; i < board.width * board.height; i++) {
        var symbol = cellArray[i];
        addCellData(board, symbol, i);
    }
}
//takes a already filled in board and adds that data to the screen
function resetMainCursor(cursor) {
    cursor.reset();
    var animatedCursor = document.getElementById('animated_cursor');
    if (animatedCursor instanceof HTMLElement) {
        animatedCursor.style.transform = 'translate(0px)';
        animatedCursor.style.top = cursor.yIndex * CELL_WIDTH + START_Y_COORDINATE + "px";
        var topLeftCursor = document.getElementById('top_left');
        var topRightCursor = document.getElementById('top_right');
        var bottomLeftCursor = document.getElementById('bottom_left');
        var bottomRightCursor = document.getElementById('bottom_right');
        if (topLeftCursor instanceof HTMLElement) {
            topLeftCursor.style.backgroundColor = "gray";
        }
        if (topRightCursor instanceof HTMLElement) {
            topRightCursor.style.backgroundColor = "gray";
        }
        if (bottomLeftCursor instanceof HTMLElement) {
            bottomLeftCursor.style.backgroundColor = "gray";
        }
        if (bottomRightCursor instanceof HTMLElement) {
            bottomRightCursor.style.backgroundColor = "gray";
        }
        animatedCursor.style.left = cursor.xIndex * CELL_WIDTH + START_X_COORDINATE + "px";
    }
}
function addBoard(board, cursor) {
    var _loop_1 = function (i) {
        var cellId = "cell_" + i;
        var mazeCell = document.getElementById(cellId);
        var xIndex = mainBoard.indexToXIndex(i);
        var yIndex = mainBoard.indexToYIndex(i);
        if (mazeCell instanceof HTMLElement) {
            mazeCell.addEventListener("mouseenter", function () { hoverClickSetCell(board, xIndex, yIndex); });
            mazeCell.addEventListener("mousedown", function () { clickSetCell(board, xIndex, yIndex); });
        }
        addCellToBoard(board, xIndex, yIndex);
    };
    for (var i = 0; i < board.width * board.height; i++) {
        _loop_1(i);
    }
    resetMainCursor(cursor);
}
function setGameMode(mode) {
    var userLevelsActionBar = document.getElementById('user_levels_action_bar');
    var baseLevelsActionBar = document.getElementById('base_levels_action_bar');
    var editModeActionBar = document.getElementById('edit_mode_action_bar');
    var userLevelsButton = document.getElementById('user_levels_button');
    var baseLevelsButton = document.getElementById('base_levels_button');
    var editModeButton = document.getElementById('edit_mode_button');
    if (!(userLevelsActionBar instanceof HTMLElement && baseLevelsActionBar instanceof HTMLElement && editModeActionBar instanceof HTMLElement && userLevelsButton instanceof HTMLElement && baseLevelsButton instanceof HTMLElement && editModeButton instanceof HTMLElement)) {
        console.log("Missing Game Mode Elements");
    }
    else {
        switch (mode) {
            case 'baseLevels':
                gameMode = 'baseLevels';
                baseLevelsActionBar.style.display = 'block';
                userLevelsActionBar.style.display = 'none';
                editModeActionBar.style.display = 'none';
                baseLevelsButton.className = 'selected';
                userLevelsButton.className = 'deselected';
                editModeButton.className = 'deselected';
                addBoardData(mainBoard, importData.baseLevels[baseLevelIndex]);
                addBoard(mainBoard, mainCursor);
                break;
            case 'userLevels':
                gameMode = 'userLevels';
                baseLevelsActionBar.style.display = 'none';
                userLevelsActionBar.style.display = 'block';
                editModeActionBar.style.display = 'none';
                baseLevelsButton.className = 'deselected';
                userLevelsButton.className = 'selected';
                editModeButton.className = 'deselected';
                addBoardData(mainBoard, importData.userLevels[userLevelIndex]);
                addBoard(mainBoard, mainCursor);
                break;
            case 'editMode':
                gameMode = 'editMode';
                baseLevelsActionBar.style.display = 'none';
                userLevelsActionBar.style.display = 'none';
                editModeActionBar.style.display = 'block';
                baseLevelsButton.className = 'deselected';
                userLevelsButton.className = 'deselected';
                editModeButton.className = 'selected';
                addBoardData(mainBoard, EMPTY_CELL_ARRAY);
                addBoard(mainBoard, mainCursor);
                break;
        }
    }
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
        board_type: (gameMode === "userLevels" ? "user" : "base"),
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
    fetch(url, boardConfigObject)
        .then(function (resp) { return resp.json(); })
        .then(function (json) { return console.log(json); })
        .catch(function (error) { return alert(error.message); });
}
var animationQueue;
function unlockAnimateUnlockCursorKey(value) {
    switch (value) {
        case 1:
            var topLeftElement = document.getElementById("top_left");
            if (topLeftElement instanceof HTMLElement) {
                topLeftElement.style.backgroundColor = "red";
            }
            break;
        case 2:
            var topRightlement = document.getElementById("top_right");
            if (topRightlement instanceof HTMLElement) {
                topRightlement.style.backgroundColor = "blue";
            }
            break;
        case 4:
            var bottomLeftElement = document.getElementById("bottom_left");
            if (bottomLeftElement instanceof HTMLElement) {
                bottomLeftElement.style.backgroundColor = "green";
            }
            break;
        case 8:
            var bottomRightElement = document.getElementById("bottom_right");
            if (bottomRightElement instanceof HTMLElement) {
                bottomRightElement.style.backgroundColor = "yellow";
            }
            break;
    }
}
//used to ensure previous movement animations complete before this one start
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
    var deltaXCoord = moveHash.deltaX * CELL_WIDTH;
    var deltaYCoord = moveHash.deltaY * CELL_WIDTH;
    var animation = anime({
        targets: animatedCursor,
        translateX: "+=" + deltaXCoord + "px",
        translateY: "+=" + deltaYCoord + "px",
        easing: 'easeInOutQuad',
        duration: 400,
    });
    animation.finished.then(function () {
        animationQueue.shift();
        unlockAnimateUnlockCursorKey(moveHash.keysUnlocked);
        if (animationQueue.length > 0) {
            dequeueAnimationQueue();
        }
    });
}
function animateSolution(solution) {
    var pathFindingAnimeTimeline = anime.timeline({
        easing: 'linear',
        autoplay: false,
    });
    for (var i = 0; i < solution.searchPath.length; i++) {
        var currentCursor = solution.searchPath[i];
        var boardIndex = mainBoard.toBoardIndex(currentCursor.xIndex, currentCursor.yIndex);
        var cell = document.getElementById("cell_" + boardIndex);
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: currentCursor.cursorColor(),
            duration: 300,
        }, 1000 + 50 * i);
    }
    for (var i = 0; i < solution.foundPath.length; i++) {
        var currentCell = solution.foundPath[i];
        var boardIndex = mainBoard.toBoardIndex(currentCell.xIndex, currentCell.yIndex);
        var flashColor = '#FFFF00';
        var cell = document.getElementById("cell_" + boardIndex);
        pathFindingAnimeTimeline.add({
            targets: cell,
            background: cursor_js_1.default.keysUnlockedColor(currentCell.bitMask),
            duration: 300,
        }, '-=150');
    }
    pathFindingAnimeTimeline.play();
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
            var dijsktraCheckBox = document.getElementById('dijkstra');
            var depthFirstSearchCheckBox = document.getElementById('depth_first_search');
            var aStarSearchWeakCheckBox = document.getElementById('a_star_search_weak');
            var aStarSearchStrongCheckBox = document.getElementById('a_star_search_strong');
            if (dijsktraCheckBox instanceof HTMLInputElement && dijsktraCheckBox.checked) {
                animateSolution(mainBoard.dijsktra(mainCursor));
            }
            else if (depthFirstSearchCheckBox instanceof HTMLInputElement && depthFirstSearchCheckBox.checked) {
                animateSolution(mainBoard.depthFirstSearch(mainCursor));
            }
            else if (aStarSearchWeakCheckBox instanceof HTMLInputElement && aStarSearchWeakCheckBox.checked) {
                animateSolution(mainBoard.aStarSearch(mainCursor, 1));
            }
            else if (aStarSearchStrongCheckBox instanceof HTMLInputElement && aStarSearchStrongCheckBox.checked) {
                animateSolution(mainBoard.aStarSearch(mainCursor, 3));
            }
            break;
        case "x":
            exportBoard(mainBoard);
            break;
        case "r":
            addBoard(mainBoard, mainCursor);
            break;
    }
});
