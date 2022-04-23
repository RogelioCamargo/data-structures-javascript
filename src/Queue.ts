class QueueNode<T> {
	public element: T | null;
	public prev: QueueNode<T> | null; 
	public next: QueueNode<T> | null;

	constructor(element: T) {
		this.element = element;
		this.prev = null; 
		this.next = null;
	}
}

class Queue<T> {
	private _head: QueueNode<T> | null;
	private _tail: QueueNode<T> | null;
	public size: number;

	constructor() {
		this._head = null;
		this._tail = null;
		this.size = 0;
	}

	public getHead(): QueueNode<T> | null {
		return this._head; 
	}

	public getTail(): QueueNode<T> | null {
		return this._tail; 
	}

	public enqueue(element: T): void {
		const newNode: QueueNode<T> = new QueueNode(element);

		if (this.isEmpty()) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			const oldTail = this._tail; 
			if (oldTail) {
				oldTail.next = newNode; 
				newNode.prev = oldTail;
				this._tail = newNode;
			}
		}

		this.size++;
	}

	public dequeue(): QueueNode<T> | null {
		if (this.isEmpty()) return null; 

		const removedNode = this._head; 
		if (this._head && !this._head.next) {
			this._head = null; 
			this._tail = null; 
		} else {
			if (removedNode) {
				const nextNode = removedNode.next; 
				if (nextNode) nextNode.prev = null; 
				this._head = nextNode; 
				removedNode.next = null; 
			}
		}

		this.size--; 
		return removedNode; 
	}

	public isEmpty(): boolean {
		return !this._head && !this._tail;
	}

	public clear(): void {
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

	public toArray(direction: boolean): Array<T | null> { 
		// true: forwards
		// false: backwards
		const array: Array<T | null> = []; 
		if (this.isEmpty()) return array; 

		if (direction) {
			let currentNode = this._head; 
			while (currentNode) {
				array.push(currentNode.element); 
				currentNode = currentNode.next; 
			}
		} else {
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