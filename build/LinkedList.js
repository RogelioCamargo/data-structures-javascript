"use strict";
class LinkedListNode {
    constructor(element) {
        this._element = element;
        this.next = null;
    }
    get element() {
        return this._element;
    }
}
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.size = 0;
    }
    clear() {
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
    isEmpty() {
        return !this._head && !this._tail;
    }
    unshift(element) {
        const newNode = new LinkedListNode(element);
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            const oldHead = this._head;
            this._head = newNode;
            newNode.next = oldHead;
        }
        this.size++;
    }
    insertAt(element, position) {
        if (position < 0 || position > this.size)
            throw Error(`Position must be range [0, ${this.size}]`);
        const newNode = new LinkedListNode(element);
        if (position === 0)
            return this.unshift(element);
        else if (position === this.size)
            return this.push(element);
        else {
            let previousNode = this._head;
            let currentPosition = 1;
            while (previousNode && currentPosition < position) {
                previousNode = previousNode.next;
                currentPosition++;
            }
            if (previousNode) {
                const nextNode = previousNode.next;
                previousNode.next = newNode;
                newNode.next = nextNode;
                if (!newNode.next)
                    this._tail = newNode;
            }
        }
        this.size++;
    }
    removeAt(position) {
        if (position < 0 || position >= this.size)
            throw Error(`Position must be range [0, ${this.size - 1}]`);
        let removedNode = null;
        if (position === 0)
            return this.shift();
        else if (position == this.size - 1)
            return this.pop();
        else {
            let currentPosition = 1;
            let previousNode = this._head;
            while (previousNode && currentPosition < position) {
                previousNode = previousNode.next;
                currentPosition++;
            }
            if (previousNode && previousNode.next) {
                removedNode = previousNode.next;
                previousNode.next = previousNode.next.next;
            }
        }
        this.size--;
        return removedNode;
    }
    push(element) {
        const newNode = new LinkedListNode(element);
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            if (this._tail)
                this._tail.next = newNode;
            this._tail = newNode;
        }
        this.size++;
    }
    shift() {
        if (this.isEmpty())
            return null;
        const removedNode = this._head;
        if (this._head && !this._head.next) {
            this._head = null;
            this._tail = null;
        }
        else {
            if (this._head)
                this._head = this._head.next;
        }
        this.size--;
        return removedNode;
    }
    pop() {
        if (this.isEmpty())
            return null;
        let removedNode = this._tail;
        if (this._head && !this._head.next) {
            this._head = null;
            this._tail = null;
        }
        else {
            let currentNode = this._head;
            while (currentNode && currentNode.next && currentNode.next.next)
                currentNode = currentNode.next;
            if (currentNode)
                currentNode.next = null;
            this._tail = currentNode;
        }
        this.size--;
        return removedNode;
    }
    search(element) {
        if (this.isEmpty())
            return null;
        let currentNode = this._head;
        while (currentNode) {
            if (currentNode.element === element)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
    toArray() {
        const array = [];
        let currentNode = this._head;
        while (currentNode) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    }
}
module.exports = LinkedList;
