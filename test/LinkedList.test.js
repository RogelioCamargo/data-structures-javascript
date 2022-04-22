const LinkedList = require("../build/LinkedList");

describe("LinkedList", () => {
	describe("add node", () => {
		test("#unshift", () => {
			const list = new LinkedList();

			list.unshift(1);
			// 1 -> NULL
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(1);
			expect(list.toArray()).toEqual([1]);

			list.unshift(2);
			// 2 -> 1 -> NULL
			expect(list.size).toBe(2);
			expect(list.getHead().element).toBe(2);
			expect(list.getTail().element).toBe(1);
			expect(list.toArray()).toEqual([2, 1]);

			list.unshift(3);
			// 3 -> 2 -> 1 -> NULL
			expect(list.size).toBe(3);
			expect(list.getHead().element).toBe(3);
			expect(list.getTail().element).toBe(1);
			expect(list.toArray()).toEqual([3, 2, 1]);

			list.clear();
		});

		test("#insert", () => {
			const list = new LinkedList();

			list.insertAt(1, 0);
			// 1 -> NULL
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(1);
			expect(list.toArray()).toEqual([1]);

			list.insertAt(2, 1);
			expect(list.size).toBe(2);
			// 1 -> 2 -> NULL
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(2);
			expect(list.toArray()).toEqual([1, 2]);

			list.insertAt(3, 1);
			expect(list.size).toBe(3);
			// 1 -> 3 -> 2 -> NULL
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(2);
			expect(list.toArray()).toEqual([1, 3, 2]);

			list.insertAt(4, 2);
			expect(list.size).toBe(4);
			// 1 -> 3 -> 4 -> 2 -> NULL
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(2);
			expect(list.toArray()).toEqual([1, 3, 4, 2]);

			list.clear();
		});

		test("#push", () => {
			const list = new LinkedList();

			list.push(3);
			// 3 -> NULL
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(3);
			expect(list.getTail().element).toBe(3);
			expect(list.toArray()).toEqual([3]);

			list.push(4);
			// 3 -> 4 -> NULL
			expect(list.size).toBe(2);
			expect(list.getHead().element).toBe(3);
			expect(list.getTail().element).toBe(4);
			expect(list.toArray()).toEqual([3, 4]);

			list.push(5);
			// 3 -> 4 -> 5 -> NULL
			expect(list.size).toBe(3);
			expect(list.getHead().element).toBe(3);
			expect(list.getTail().element).toBe(5);
			expect(list.toArray()).toEqual([3, 4, 5]);

			list.clear();
		});
	});

	describe("search node", () => {
		test("#search", () => {
			const list = new LinkedList();
			list.push(1);
			list.push(2);
			list.push(3);
			list.push(4);

			let result;
			result = list.search(2);
			expect(result.element).toBe(2);
			result = list.search(4);
			expect(result.element).toBe(4);
			result = list.search(5);
			expect(result).toBeNull();

			list.clear();
		});
	});

	describe("remove node", () => {
		test("#shift", () => {
			const list = new LinkedList();
			list.unshift(1);
			list.unshift(2);
			// 2 -> 1 -> NULL

			let removedNode;
			removedNode = list.shift();
			expect(removedNode.element).toBe(2);
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(1);
			expect(list.toArray()).toEqual([1]);

			removedNode = list.shift();
			expect(removedNode.element).toBe(1);
			expect(list.size).toBe(0);
			expect(list.getHead()).toBeNull();
			expect(list.getTail()).toBeNull();
			expect(list.toArray()).toEqual([]);

			list.clear();
		});

		test("#removeAt", () => {
			const list = new LinkedList();
			list.push(1);
			list.push(2);
			list.push(3);
			list.push(4);
			// 1 -> 2 -> 3 -> 4 -> NULL

			let removedNode;
			removedNode = list.removeAt(2);
			// 1 -> 2 -> 4 -> NULL
			expect(list.size).toBe(3);
			expect(removedNode.element).toBe(3);
			expect(list.toArray()).toEqual([1, 2, 4]);

			removedNode = list.removeAt(1);
			// 1 -> 4 -> NULL
			expect(list.size).toBe(2);
			expect(removedNode.element).toBe(2);
			expect(list.toArray()).toEqual([1, 4]);

			removedNode = list.removeAt(1);
			// 1 -> NULL
			expect(list.size).toBe(1);
			expect(removedNode.element).toBe(4);
			expect(list.toArray()).toEqual([1]);

			list.clear();
		});

		test("#pop", () => {
			const list = new LinkedList();
			list.push(1);
			list.push(2);

			// 1 -> 2 -> NULL
			let removedNode;
			removedNode = list.pop();
			expect(list.size).toBe(1);
			expect(removedNode.element).toBe(2);

			removedNode = list.pop();
			expect(removedNode.element).toBe(1);
			expect(list.size).toBe(0);
			expect(list.getHead()).toBeNull();
			expect(list.getTail()).toBeNull();

			list.clear();
		});
	});
});
