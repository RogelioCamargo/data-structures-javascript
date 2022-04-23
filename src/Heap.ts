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
}

// const heap = new Heap((a, b) => 1);