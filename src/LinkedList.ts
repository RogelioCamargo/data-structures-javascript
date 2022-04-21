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
	head: null | LinkedListNode<T>;
	tail: null | LinkedListNode<T>;
	size: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	public isEmpty(): boolean {
		return !this.head && !this.tail;
	}

	public unshift(element: T): void {
		const newElement: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this.head = newElement;
			this.tail = newElement;
		} else {
			const oldHead = this.head;
			this.head = newElement;
			newElement.next = oldHead;
		}

		this.size++;
	}

	public push(element: T): void {
		const newElement: LinkedListNode<T> = new LinkedListNode(element);
		if (this.isEmpty()) {
			this.head = newElement;
			this.tail = newElement;
		} else {
			if (this.tail) this.tail.next = newElement;
			this.tail = newElement;
		}
		this.size++;
	}

	public shift(element: T): LinkedListNode<T> | null {
		if (this.isEmpty()) return null; 

		const removedNode = this.head; 
		if (this.head && !this.head.next) {
			this.head = null; 
			this.tail = null; 
		} else {
			if (removedNode) removedNode.next = null; 
			if (this.head) this.head = this.head.next;
		}

		this.size--;
		return removedNode;
	}

	public pop(): LinkedListNode<T> | null {
		if (this.isEmpty()) return null;

		const removedNode = this.tail;
		if (this.head && !this.head.next) {
			this.head = null;
			this.tail = null;
		} else {
			let currentNode = this.head;
			while (currentNode && currentNode.next && currentNode.next.next)
				currentNode = currentNode.next;

			if (currentNode) currentNode.next = null;
			this.tail = currentNode;
		}

		this.size--;
		return removedNode;
	}
}
