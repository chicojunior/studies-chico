var steps = 0;
var numberOfSteps = function(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      numberOfSteps(num / 2);
      steps++;
    } else {
      numberOfSteps(num - 1);
      steps++;
    }
  } else {
    steps = 0;
  }
  return steps;
};

var subtractProductAndSum = function(n) {
  nString = n.toString().split('');
  var product = nString.reduce((agg, cur) => parseInt(agg) * parseInt(cur));
  var sum = nString.reduce((agg, cur) => parseInt(agg) + parseInt(cur));

  return product - sum;
};

subtractProductAndSum(254);
