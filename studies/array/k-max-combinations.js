const kMaxCombinations = (firstList, secondList, listLength, numberOfCombinations) => {
  let sumList = [];

  for (let i = 0; i < listLength; i++) {
    for (let j = 0; j < listLength; j++) {
      sumList.push(firstList[i] + secondList[j]);
    }
  }

  sumList = sumList.sort((a, b) => b - a);


  for (let i = 0; i < numberOfCombinations; i++) {
    console.log(sumList[i]);
  }
}



const a = [4, 2, 5, 1];
const b = [8, 0, 3, 5];
const n = 4;
const k = 8;

kMaxCombinations(a, b, n, k);