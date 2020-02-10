const equals = (a, b) => a === b;

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  add(element, index = null) {
    const node = new Node(element);

    if (index == null) {
      return this.insertOnTail(node);
    }

    if (index >= 0 && index <= this.length) {
      return this.insertAtPosition(node, index);
    }

    return false;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
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

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.length && current != null; i++) {
      if (equals(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
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

  toString() {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 0; i < this.length && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}

class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }
  insertAtPosition(node, position) {
    let current = this.head;
    if (position === 0) {
      if (this.head == null) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        current = this.getElementAt(this.length);
        this.head = node;
        current.next = this.head;
      }
    } else {
      const previous = this.getElementAt(position - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
    }

    this.length++;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.length === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.length);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return null;
  }
}

module.exports = Node;
module.exports = LinkedList;
