// https://www.geeksforgeeks.org/expand-the-string-according-to-the-given-conditions/
const expandString = (pattern) => {
  const regX = /([1-9])(\()([\w]+)(\))/g;
  let matches;
  let expandedString = '';

  while ((matches = regX.exec(pattern)) !== null) {
    if (matches.index === regX.lastIndex) {
      regX.lastIndex++;
    }
  
    expandedString += matches[3].repeat(parseInt(matches[1]));
  }

  return expandedString;
}

console.log(expandString('3(ab)2(cd)4(ef)'));
