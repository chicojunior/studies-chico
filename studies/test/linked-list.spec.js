const LinkedList = require('../linked-list');

test('creates a new list', async () => {
  const list = new LinkedList();
  expect(list).toBeTruthy();
});

test('check empty list', async () => {
  const list = new LinkedList();
  expect(list.head).toBeFalsy();
});

test('insert items on a list', async () => {
  const list = new LinkedList();
  list.push(25);
  list.push('foo');
  list.push({ a: 'bar' });
  expect(list.length).toEqual(3);
});

test('insert a item on a specific position', async () => {
  const list = new LinkedList();
  list.push(25, 0);
  list.push('test');
  list.push(16, 1);
  expect(list.getElementAt(1).element).toEqual(16);
});

test('insert a item on list at a not valid position', async () => {
  const list = new LinkedList();
  list.push(25, 2);
  expect(list.length).toBeFalsy();
});

test('check not empty list', async () => {
  const list = new LinkedList();
  list.push('list item');
  expect(list.head).toBeTruthy();
});
