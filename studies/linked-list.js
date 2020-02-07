function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.length = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
	}
	
  insertAtPosition(node, position) {
    let current;
    if (position === 0) {
      current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(position - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
    }

		this.length++;
  }

  insertOnTail(node) {
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
			}
			
			current.next = node;
    }
    this.length++;
  }

  push(element, index = null) {
    const node = new Node(element);

    if (index == null) {
      return this.insertOnTail(node);
    }

    if (index >= 0 && index <= this.length) {
			return this.insertAtPosition(node, index);
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }

    return null;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }
}

module.exports = Node;
module.exports = LinkedList;
