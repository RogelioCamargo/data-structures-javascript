"use strict";
// by default, heap is a min-heap
class Heap {
    constructor(isMinHeap = true) {
        this._compare = isMinHeap
            ? (a, b) => (a <= b ? -1 : 1) // MinHeap compare function
            : (a, b) => (a < b ? 1 : -1); // MaxHeap compare function
        this._items = [];
    }
    get size() {
        return this._items.length;
    }
    get items() {
        return this._items.slice();
    }
    peek() {
        this._throwErrorIfEmptyHeap();
        return this._items[0];
    }
    insert(element) {
        // add element to end of array
        this._items.push(element);
        // satisfy heap invariant
        this._heapifyUp();
    }
    poll() {
        this._throwErrorIfEmptyHeap();
        // store copy of root element
        const element = this._items[0];
        // move last element to root since root element is being removed
        this._items[0] = this._items[this.size - 1];
        // remove last element since it's already at root
        this._items.pop();
        // satisfy heap invariant
        this._heapifyDown();
        return element;
    }
    _heapifyUp() {
        // start at end of array
        let index = this.size - 1;
        // if a parent exists and meets a condition, we bubble up by swapping
        while (this._hasParent(index) &&
            this._compare(this._parent(index), this._items[index]) > 0) {
            this._swap(index, this._getParentIndex(index));
            index = this._getParentIndex(index);
        }
    }
    _heapifyDown() {
        // start at top of array
        let index = 0;
        while (this._hasLeftChild(index)) {
            // find the correct child we need to compare with
            let indexOfInterest = this._getLeftChildIndex(index);
            if (this._hasRightChild(index) &&
                this._compare(this._leftChild(index), this._rightChild(index)) > 0) {
                indexOfInterest = this._getRightChildIndex(index);
            }
            if (this._compare(this._items[index], this._items[indexOfInterest]) < 0)
                break;
            else
                this._swap(index, indexOfInterest);
            index = indexOfInterest;
        }
    }
    _throwErrorIfEmptyHeap() {
        if (this.size === 0)
            throw new Error("Heap is empty");
    }
    _getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    _getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    _getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    _hasParent(index) {
        return this._getParentIndex(index) >= 0;
    }
    _hasLeftChild(index) {
        return this._getLeftChildIndex(index) < this.size;
    }
    _hasRightChild(index) {
        return this._getRightChildIndex(index) < this.size;
    }
    _parent(index) {
        return this._items[this._getParentIndex(index)];
    }
    _leftChild(index) {
        return this._items[this._getLeftChildIndex(index)];
    }
    _rightChild(index) {
        return this._items[this._getRightChildIndex(index)];
    }
    _swap(a, b) {
        [this._items[a], this._items[b]] = [this._items[b], this._items[a]];
    }
}
class MaxHeap extends Heap {
    constructor() {
        super(false);
    }
}
class MinHeap extends Heap {
    constructor() {
        super();
    }
}
module.exports = { MinHeap, MaxHeap };
