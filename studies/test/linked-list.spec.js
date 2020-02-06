const LinkedList = require('../linked-list');

test('creates a new list', async () => {
  const list = new LinkedList();
  expect(list).toBeTruthy(); 
});

test('insert a item on list', async () => {
  const list = new LinkedList();
  list.push(25);
  expect(list.count).toEqual(1);
});