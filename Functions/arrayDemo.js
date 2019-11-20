var stringToNum = ['2', '4', '5'].map(Number);
console.log(stringToNum);

//filter
var numberEven = ['2', '4', '7', '8'].map(Number).filter(a => a%2 == 0);
console.log(numberEven);

//reduce
var reduceNumber = ['1', '2', '3'].map(Number).reduce((p, c) => p+c, 0);
console.log(reduceNumber);