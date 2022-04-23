"use strict";
class QueueNode {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this.size = 0;
    }
    getHead() {
        return this._head;
    }
    getTail() {
        return this._tail;
    }
    enqueue(element) {
        const newNode = new QueueNode(element);
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            const oldTail = this._tail;
            if (oldTail) {
                oldTail.next = newNode;
                newNode.prev = oldTail;
                this._tail = newNode;
            }
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty())
            return null;
        const removedNode = this._head;
        if (this._head && !this._head.next) {
            this._head = null;
            this._tail = null;
        }
        else {
            if (removedNode) {
                const nextNode = removedNode.next;
                if (nextNode)
                    nextNode.prev = null;
                this._head = nextNode;
                removedNode.next = null;
            }
        }
        this.size--;
        return removedNode;
    }
    isEmpty() {
        return !this._head && !this._tail;
    }
    clear() {
        if (!this.isEmpty()) {
            let currentNode = this._head;
            while (currentNode) {
                const nextNode = currentNode.next;
                currentNode.element = null;
                currentNode.prev = null;
                currentNode.next = null;
                currentNode = nextNode;
            }
        }
        this._head = null;
        this._tail = null;
    }
    toArray(direction) {
        // true: forwards
        // false: backwards
        const array = [];
        if (this.isEmpty())
            return array;
        if (direction) {
            let currentNode = this._head;
            while (currentNode) {
                array.push(currentNode.element);
                currentNode = currentNode.next;
            }
        }
        else {
            let currentNode = this._tail;
            while (currentNode) {
                array.push(currentNode.element);
                currentNode = currentNode.prev;
            }
        }
        return array;
    }
}
module.exports = Queue;
