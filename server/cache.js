// The node wiill be an object which will store the key value and expiry like a double linked list
const Node = (key, value, expiry) => ({
	key,
	value,
	expiry,
	prev: null,
	next: null,
});


const handler = (limit) => {
	let size = 0;
	const cache = new Map();
	let head = null;
	let tail = null;

	const removeNode = (node) => {
		if (node.prev) {
			node.prev.next = node.next;
		} else {
			head = node.next;
		}

		if (node.next) {
			node.next.prev = node.prev;
		} else {
			tail = node.prev;
		}
	};

	const addNodeToHead = (node) => {
		node.next = head;
		node.prev = null;

		if (head) {
			head.prev = node;
		}

		head = node;

		if (!tail) {
			tail = node;
		}
	};

	const evict = () => {
		if (tail) {
			cache.delete(tail.key);
			removeNode(tail);
			size--;
		}
	};

	const isExpired = (node) => {
		return node.expiry < Date.now();
	};

	const get = (key) => {
		if (!cache.has(key)) {
			return null;
		}

		const node = cache.get(key);

		if (isExpired(node)) {
			del(key);
			return null;
		}

		removeNode(node);
		addNodeToHead(node);

		return node.value;
	};

	const set = (key, value, ttl) => {
		if (cache.has(key)) {
			const existingNode = cache.get(key);
			removeNode(existingNode);
			size--;
		} else if (size === limit) {
			evict();
		}

		const expiry = Date.now() + ttl;
		const newNode = Node(key, value, expiry);
		addNodeToHead(newNode);
		cache.set(key, newNode);
		size++;
	};

	const del = (key) => {
		if (!cache.has(key)) {
			return;
		}

		const node = cache.get(key);
		removeNode(node);
		cache.delete(key);
		size--;
	};

	return {
		get,
		set,
		delete: del,
	};
};

module.exports = handler;
