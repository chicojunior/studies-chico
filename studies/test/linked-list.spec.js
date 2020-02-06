const LinkedList = require('../linked-list');

test('creates a new list', async () => {
  const list = new LinkedList();
  expect(list).toBeTruthy(); 
});

test('check empty list', async () => {
  const list = new LinkedList();
  expect(list.head).toBeFalsy();
});

test('insert a item on list', async () => {
  const list = new LinkedList();
  list.push(25);
  expect(list.length).toEqual(1);
});

test('check not empty list', async () => {
  const list = new LinkedList();
  list.push('list item');
  expect(list.head).toBeTruthy();
});