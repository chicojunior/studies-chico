const quicksort = list => {
  const left = [];
  const right = [];
  const pivot = list[list.length - 1];
  const pivotIndex = list.indexOf(pivot);
  
  if (list.length <= 1) {
    return list;
  }

  for (let i = 0; i < list.length; i++) {
    if (i != pivotIndex) {
      list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

module.exports = quicksort;
