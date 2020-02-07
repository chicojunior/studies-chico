const quicksort = list => {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[list.length - 1];
  const left = [];
  const right = [];
  const pivotIndex = list.indexOf(pivot);

  for (let i = 0; i < list.length; i++) {
    if (i != pivotIndex) {
      list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

module.exports = quicksort;
