const LinkedList = require("../build/LinkedList");

describe("LinkedList", () => {
	describe("add node", () => {
		test("#unshift", () => {
			const list = new LinkedList();

			list.unshift(1);
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(1);
			expect(list.getTail().element).toBe(1);

			list.unshift(2);
			expect(list.size).toBe(2);
			expect(list.getHead().element).toBe(2);

			list.clear();
		});

		test("#push", () => {
			const list = new LinkedList();

			list.push(3);
			expect(list.size).toBe(1);
			expect(list.getHead().element).toBe(3);
			expect(list.getTail().element).toBe(3);

			list.push(4);
			expect(list.size).toBe(2);
			expect(list.getTail().element).toBe(4);

			list.clear();
		});
	});

	describe("remove node", () => {
		test("#shift", () => {
			const list = new LinkedList();
			list.unshift(1); 
			list.unshift(2);

			expect(list.getHead().element).toBe(2);
			let removedNode;
			removedNode = list.shift();
			expect(list.size).toBe(1);
			expect(removedNode.element).toBe(2);

			removedNode = list.shift();
			expect(removedNode.element).toBe(1);
			expect(list.size).toBe(0);
			expect(list.getHead()).toBeNull();
			expect(list.getTail()).toBeNull();

			list.clear();
		});

		test("#pop", () => {
			const list = new LinkedList();
			list.push(1); 
			list.push(2);

			expect(list.getTail().element).toBe(2);
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
