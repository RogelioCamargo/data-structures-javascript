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
		const newElement: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this._head = newElement;
			this._tail = newElement;
		} else {
			const oldHead = this._head;
			this._head = newElement;
			newElement.next = oldHead;
		}

		this.size++;
	}

	public push(element: T): void {
		const newElement: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this._head = newElement;
			this._tail = newElement;
		} else {
			if (this._tail) this._tail.next = newElement;
			this._tail = newElement;
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
}

module.exports = LinkedList;
