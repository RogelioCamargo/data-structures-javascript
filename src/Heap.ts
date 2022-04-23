interface CompareFunction<T> {
	(a: T, b: T): number; 
}

class Heap<T> {
	private _compare: CompareFunction<T>;
	private _items: Array<T>; 

	constructor(compare: CompareFunction<T>) {
		if (typeof compare !== "function")
			throw Error("Constructor expects a compare function");

		this._compare = compare;
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
		this._items.push(element); 
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
		// ensure heap invariant is upheld
		this._heapifyDown();

		return element; 
	}

	private _heapifyUp(): void {

	}

	private _heapifyDown(): void {

	}

	private _throwErrorIfEmptyHeap(): void {
		if (this.size === 0) 
			throw new Error("Heap is empty"); 
	}
}

// const heap = new Heap((a, b) => 1);