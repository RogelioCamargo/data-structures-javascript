class LinkedListNode<T> {
	private _element: T;
	public next: null | LinkedListNode<T>;

	constructor(element: T) {
		this._element = element;
		this.next = null;
	}

	get element(): T {
		return this._element;
	}
}

class LinkedList<T> {
	private _head: null | LinkedListNode<T>;
	private _tail: null | LinkedListNode<T>;
	public size: number;

	constructor() {
		this._head = null;
		this._tail = null;
		this.size = 0;
	}

	public clear(): void {
		this._head = null;
		this._tail = null;
		this.size = 0;
	}

	public getHead(): LinkedListNode<T> | null {
		return this._head;
	}

	public getTail(): LinkedListNode<T> | null {
		return this._tail;
	}

	public isEmpty(): boolean {
		return !this._head && !this._tail;
	}

	public unshift(element: T): void {
		const newNode: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			const oldHead = this._head;
			this._head = newNode;
			newNode.next = oldHead;
		}

		this.size++;
	}

	public insertAt(element: T, position: number): void {
		if (position < 0 || position > this.size)
			throw Error(`Position must be range [0, ${this.size}]`);

		const newNode: LinkedListNode<T> = new LinkedListNode(element);

		if (position === 0) return this.unshift(element);
		else if (position === this.size) return this.push(element);
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

				if (!newNode.next) this._tail = newNode;
			}
		}

		this.size++;
	}

	public removeAt(position: number): LinkedListNode<T> | null {
		if (position < 0 || position >= this.size)
			throw Error(`Position must be range [0, ${this.size - 1}]`);

		let removedNode = null;
		if (position === 0) return this.shift();
		else if (position == this.size - 1) return this.pop();
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

	public push(element: T): void {
		const newNode: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			if (this._tail) this._tail.next = newNode;
			this._tail = newNode;
		}
		this.size++;
	}

	public shift(): LinkedListNode<T> | null {
		if (this.isEmpty()) return null;

		const removedNode = this._head;
		if (this._head && !this._head.next) {
			this._head = null;
			this._tail = null;
		} else {
			if (this._head) this._head = this._head.next;
		}

		this.size--;
		return removedNode;
	}

	public pop(): LinkedListNode<T> | null {
		if (this.isEmpty()) return null;

		let removedNode = this._tail;
		if (this._head && !this._head.next) {
			this._head = null;
			this._tail = null;
		} else {
			let currentNode = this._head;
			while (currentNode && currentNode.next && currentNode.next.next)
				currentNode = currentNode.next;

			if (currentNode) currentNode.next = null;
			this._tail = currentNode;
		}

		this.size--;
		return removedNode;
	}

	public search(element: T): LinkedListNode<T> | null {
		if (this.isEmpty()) return null;

		let currentNode = this._head;
		while (currentNode) {
			if (currentNode.element === element) return currentNode;
			currentNode = currentNode.next;
		}

		return null;
	}

	public toArray(): Array<T> {
		const array: Array<T> = [];
		let currentNode = this._head;
		while (currentNode) {
			array.push(currentNode.element);
			currentNode = currentNode.next;
		}
		return array;
	}
}

module.exports = LinkedList;
