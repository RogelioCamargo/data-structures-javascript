const { MinHeap, MaxHeap } = require("../build/Heap");

describe("Heap", () => {
	describe("MinHeap", () => {
		const heap = new MinHeap(); 

		test("#insert", () => {
			heap.insert(23); // 23
			expect(heap.peek()).toBe(23); 
			expect(heap.items).toEqual([23]);

			heap.insert(14); // 14, 23
			expect(heap.peek()).toBe(14); 
			expect(heap.items).toEqual([14, 23]);

			heap.insert(14); // 14, 23, 14
			expect(heap.peek()).toBe(14); 
			expect(heap.items).toEqual([14, 23, 14]);

			heap.insert(13); // 13, 14, 14, 23
			expect(heap.peek()).toBe(13); 
			expect(heap.items).toEqual([13, 14, 14, 23]);

			heap.insert(22); // 13, 14, 14, 23, 22
			expect(heap.peek()).toBe(13); 
			expect(heap.items).toEqual([13, 14, 14, 23, 22]);

			heap.insert(19); 
			heap.insert(20);
			heap.insert(27);

			heap.insert(13); // 13, 13, 14, 14, 22, 19, 20, 27, 23
			expect(heap.peek()).toBe(13); 
			expect(heap.items).toEqual([13, 13, 14, 14, 22, 19, 20, 27, 23]);
		}); 

		test("#poll", () => {
			let item; 
			item = heap.poll(); 
			expect(item).toBe(13);
			expect(heap.peek()).toBe(13); 
			expect(heap.items).toEqual([13, 14, 14, 23, 22, 19, 20, 27]);

			item = heap.poll(); 
			expect(item).toBe(13);
			expect(heap.peek()).toBe(14); 
			expect(heap.items).toEqual([14, 22, 14, 23, 27, 19, 20]);

			item = heap.poll(); 
			expect(item).toBe(14);
			expect(heap.peek()).toBe(14); 
			expect(heap.items).toEqual([14, 22, 19, 23, 27, 20]);

			item = heap.poll(); 
			expect(item).toBe(14);
			expect(heap.peek()).toBe(19); 
			expect(heap.items).toEqual([19, 22, 20, 23, 27]);

			heap.poll(); 
			heap.poll();
			heap.poll(); 
			heap.poll();
			item = heap.poll(); 
			expect(item).toBe(27); 
			expect(heap.items).toEqual([]);
		});
	}); 

	describe("MaxHeap", () => {
		test("#insert", () => {

		});

		test("#poll", () => {

		});
	}); 
});