const Queue = require("../build/Queue");

describe("Queue", () => {
	test("#enqueue", () => {
		const queue = new Queue();

		queue.enqueue(1);
		// 1 -> NULL
		expect(queue.size).toBe(1);
		expect(queue.getHead().element).toBe(1);
		expect(queue.getTail().element).toBe(1);
		expect(queue.toArray(true)).toEqual([1]);

		queue.enqueue(2);
		// 1 -> 2 -> NULL
		expect(queue.size).toBe(2);
		expect(queue.getHead().element).toBe(1);
		expect(queue.getTail().element).toBe(2);
		expect(queue.toArray(true)).toEqual([1, 2]);
		expect(queue.toArray(false)).toEqual([2, 1]);

		queue.enqueue(3);
		// 1 -> 2 -> 3 -> NULL
		expect(queue.size).toBe(3);
		expect(queue.getHead().element).toBe(1);
		expect(queue.getTail().element).toBe(3);
		expect(queue.toArray(true)).toEqual([1, 2, 3]);
		expect(queue.toArray(false)).toEqual([3, 2, 1]);

		queue.clear();
	});

	test("#dequeue", () => {
		const queue = new Queue();
		queue.enqueue(1); 
		queue.enqueue(2); 
		queue.enqueue(3); 

		let removedNode; 
		removedNode = queue.dequeue();
		// 2 -> 3 -> NULL
		expect(queue.size).toBe(2);
		expect(removedNode.element).toBe(1);
		expect(queue.getHead().element).toBe(2);
		expect(queue.getTail().element).toBe(3);
		expect(queue.toArray(true)).toEqual([2, 3]);
		expect(queue.toArray(false)).toEqual([3, 2]);

		removedNode = queue.dequeue();
		// 3 -> NULL
		expect(queue.size).toBe(1);
		expect(removedNode.element).toBe(2);
		expect(queue.getHead().element).toBe(3);
		expect(queue.getTail().element).toBe(3);
		expect(queue.toArray(true)).toEqual([3]);
		expect(queue.toArray(false)).toEqual([3]);

		removedNode = queue.dequeue();
		// NULL
		expect(queue.size).toBe(0);
		expect(removedNode.element).toBe(3);
		expect(queue.getHead()).toBeNull();
		expect(queue.getTail()).toBeNull();

		queue.clear();
	});

});
