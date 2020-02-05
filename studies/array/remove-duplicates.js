var numbers = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function() {
  numbers = numbers.filter((item, pos) => {
    return numbers.indexOf(item) === pos;
  });
};

removeDuplicates(numbers);
console.log(numbers);