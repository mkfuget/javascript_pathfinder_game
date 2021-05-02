"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(comparator) {
        if (comparator === void 0) { comparator = function (a, b) {
            return a > b;
        }; }
        this.heap = [];
        this.comparator = comparator;
    }
    PriorityQueue.prototype.size = function () {
        return this.heap.length;
    };
    PriorityQueue.prototype.empty = function () {
        return this.heap.length === 0;
    };
    PriorityQueue.prototype.parent = function (i) {
        return Math.floor((i - 1) / 2);
    };
    PriorityQueue.prototype.left = function (i) {
        return (2 * i + 1);
    };
    PriorityQueue.prototype.right = function (i) {
        return 2 * (i + 1);
    };
    PriorityQueue.prototype.peek = function () {
        return this.heap[0];
    };
    PriorityQueue.prototype.push = function (value) {
        this.heap.push(value);
        this.bubbleUp(this.size() - 1);
    };
    PriorityQueue.prototype.pop = function () {
        var outValue = this.peek();
        this.swap(0, this.size() - 1);
        this.heap.pop();
        this.bubbleDown(0);
        return outValue;
    };
    PriorityQueue.prototype.swap = function (i, j) {
        _a = [this.heap[j], this.heap[i]], this.heap[i] = _a[0], this.heap[j] = _a[1];
        var _a;
    };
    PriorityQueue.prototype.bubbleUp = function (i) {
        while (i > 0 && this.comparator(this.heap[i], this.heap[this.parent(i)])) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    };
    PriorityQueue.prototype.bubbleDown = function (i) {
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
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;
