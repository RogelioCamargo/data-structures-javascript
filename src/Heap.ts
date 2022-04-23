interface CompareFunction<T> {
	(a: T, b: T): number;
}

// by default, heap is a min-heap
class Heap<T> {
	private _compare: CompareFunction<T>;
	private _items: Array<T>;

	constructor(isMinHeap: boolean = true) {
		this._compare = isMinHeap
			? (a, b) => (a <= b ? -1 : 1) // MinHeap compare function
			: (a, b) => (a < b ? 1 : -1); // MaxHeap compare function
		this._items = [];
	}

	get size(): number {
		return this._items.length;
	}

	public peek(): T {
		this._throwErrorIfEmptyHeap;

		return this._items[0];
	}

	public insert(element: T): void {
		// add element to end of array
		this._items.push(element);
		// satisfy heap invariant
		this._heapifyUp();
	}

	public poll(): T | undefined {
		this._throwErrorIfEmptyHeap();

		// store copy of root element
		const element: T = this._items[0];
		// move last element to root since root element is being removed
		this._items[0] = this._items[this.size - 1];
		// remove last element since it's already at root
		this._items.pop();
		// satisfy heap invariant
		this._heapifyDown();

		return element;
	}

	private _heapifyUp(): void {
		// start at end of array
		let index: number = this.size - 1;
		// if a parent exists and meets a condition, we bubble up by swapping
		while (
			this._hasParent(index) &&
			this._compare(this._parent(index), this._items[index]) > 0
		) {
			this._swap(index, this._getParentIndex(index));
			index = this._getParentIndex(index);
		}
	}

	private _heapifyDown(): void {
		// start at top of array
		let index: number = 0;

		while (this._hasLeftChild(index)) {
			// find the correct child we need to compare with
			let indexOfInterest: number = this._getLeftChildIndex(index);
			if (
				this._hasRightChild(index) &&
				this._compare(this._leftChild(index), this._rightChild(index)) > 0
			) {
				indexOfInterest = this._getRightChildIndex(index);
			}

			if (this._compare(this._items[index], this._items[indexOfInterest]) < 0)
				break;
			else this._swap(index, indexOfInterest);

			index = indexOfInterest;
		}
	}

	private _throwErrorIfEmptyHeap(): void {
		if (this.size === 0) throw new Error("Heap is empty");
	}

	private _getParentIndex(childIndex: number): number {
		return Math.floor((childIndex - 1) / this.size);
	}

	private _getLeftChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 1;
	}

	private _getRightChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 2;
	}

	private _hasParent(index: number): boolean {
		return this._getParentIndex(index) >= 0;
	}

	private _hasLeftChild(index: number): boolean {
		return this._getLeftChildIndex(index) < this.size;
	}

	private _hasRightChild(index: number): boolean {
		return this._getRightChildIndex(index) < this.size;
	}

	private _parent(index: number): T {
		return this._items[this._getParentIndex(index)];
	}

	private _leftChild(index: number): T {
		return this._items[this._getLeftChildIndex(index)];
	}

	private _rightChild(index: number): T {
		return this._items[this._getRightChildIndex(index)];
	}

	private _swap(a: number, b: number): void {
		[this._items[a], this._items[b]] = [this._items[b], this._items[a]];
	}
}

class MaxHeap<T> extends Heap<T> {
	constructor() {
		super(false);
	}
}

class MinHeap<T> extends Heap<T> {
	constructor() {
		super();
	}
}

// HACK
// TypeScript uses the DOM typings for the global execution environment.
// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
// export {}
