let arrA = [23, 34, 56, 67, 78, 90];
let arrC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrB = ['I', 'am', 'an', 'small', 'test', 'array'];

let RarrB = arrB.reverse();
console.log(RarrB);

a = arrB.slice(-3, 5);
console.log(a);
arrB.splice(1, 3);
console.log(arrB);

arrC.splice(-3);

arrC.forEach((num, i) => (arrC[i] = num - 1));
console.log(arrC);

console.log(arrC);
let b = arrC.map((e) => e * 2);
b;

console.log(arrC.concat('break', b));

let arrD = [10, 20, 30, 40, 50, 60, 70];

console.log(arrD.slice(-1)[0]);
console.log(arrD.at(1));
console.log(arrD.at(-1));

let testName = 'Akash';
console.log(testName.at(-1));

let arr = [10, -20, 50, -10, 90, -30];

for (let item of arr) {
  if (item > 0) console.log('positive :', item);
  else console.log('negative : ', item);
}

arr.forEach((num, i, ary) => {
  if (i === 0) console.log(ary);
  if (num > 0) console.log(num, i);
});

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a1Filter = a1.filter((num, i, ary) => num % 2 === 0);
console.log(a1Filter);

//Accumulator collets the value from reduse method itself
a1Reduce = a1.reduce((accumalator, num, i, ary) => {
  console.log(accumalator);
  return accumalator + num;
}, -10);
//0 is the default valur of accumulator
console.log(a1Reduce);
// <-------------------------------->
a1Reduce = a1.reduce((accumalator, num, i, ary) => {
  console.log(accumalator);
  return accumalator + num;
});
//default accumulator is 0
console.log(a1Reduce);
