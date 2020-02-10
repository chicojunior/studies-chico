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
  list.add(25);
  list.add('foo');
  list.add({ a: 'bar' });
  expect(list.length).toEqual(3);
});

test('insert a item on a specific position', async () => {
  const list = new LinkedList();
  list.add(25, 0);
  list.add('test');
  list.add(16, 1);
  expect(list.getElementAt(1).element).toEqual(16);
});

test('insert a item on list at a not valid position', async () => {
  const list = new LinkedList();
  list.add(25, 2);
  expect(list.length).toBeFalsy();
});

test('check not empty list', async () => {
  const list = new LinkedList();
  list.add('list item');
  expect(list.head).toBeTruthy();
});

test('delete a item from the list', async () => {
  const list = new LinkedList();
  list.add(25, 0);
  list.add('test');
  list.add(16, 1);
  list.add('new item');
  list.remove(25);
  expect(list).toHaveLength(3);
});
