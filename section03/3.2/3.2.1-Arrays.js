create an Array using an Array literal
const myArray = [456 ,"This is a string", null, false];
// access the 1st item in the Array
console.log(myArray[0]);
// access the last item in the Array
console.log(myArray[3]);
// print the length of the Array
console.log(myArray);
// use the length property to access the last item in the Array
console.log(myArray[myArray.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let thing of myArray) {
newArr.push(`$(thing)`);
}

console.log(newArr);
