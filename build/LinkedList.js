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
        const newElement = new LinkedListNode(element);
        if (this.isEmpty()) {
            this._head = newElement;
            this._tail = newElement;
        }
        else {
            const oldHead = this._head;
            this._head = newElement;
            newElement.next = oldHead;
        }
        this.size++;
    }
    push(element) {
        const newElement = new LinkedListNode(element);
        if (this.isEmpty()) {
            this._head = newElement;
            this._tail = newElement;
        }
        else {
            if (this._tail)
                this._tail.next = newElement;
            this._tail = newElement;
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
}
module.exports = LinkedList;
