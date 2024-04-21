// how to create an object in javascript

let obj = {

    name: "RISHABH",
    age: 19,
};

console.log(obj);

// SHALLOW COPY
let myobj1 = obj;  // here myobj1 and obj have same reference due to which when we does some change in
// obj it also reflects in myobj1

console.log(myobj1);

// objects can also contain functions

let ob = {

    name: "RONNIE",
    age: 19,
    greet: () => console.log("HELLO JI KAISE HO SAARE"),
};

ob.greet();     // this gives us the function greet from object ob
console.log(ob);


// ARRAYS IN JAVASCRIPT

// let array = [10,20,30,40,50];     // creation of array

let arr = new Array('rishabh', true, 1);     // creation by array constructor

console.log(typeof(arr));

// array methods
/*
Push, Pop, toString, Concat, unshift, shift, slice, splice
special methods -> map, filter, reduce
*/

let brr = [1,2,3,4,5];

// push is used to add element to the end of the array
brr.push(8);
console.log(brr);

// pop is used to delete element from the end of the array ans it also returns the poped value
brr.pop();
console.log(brr);

// toString as the name suggests it converts the array to string
let a = brr.toString();
console.log(typeof(a));

// unshift is used to add element to the start 
brr.unshift(0);
console.log(brr);

// shift is used to delete element from start
brr.shift();
console.log(brr);

// slice is used to get a subarray from the array and it returns a piece of array
// slice(starting index, ending index)  -> note => it excludes the ending index that is gives subarray
// from starting index to ending index - 1

// console.log(brr.slice(1, 4));

// splice is used to modify the original array
// splice(startIdx, delcount, newElement)

brr.splice(2, 2, 101, 102);
console.log(brr);

// SPECIAL METHODS OF ARRAY

// 1. map -> it creates a new array based upon some operations 

let array = [10,20,30,34,2,0];

let newarr = array.map((val) => {

    return val * 2;
})

// console.log(newarr);

// 2. filter -> it creates a new array of elements that gives condition true or false for specified
// condition

let Arrays = [7,8,9,12,32];

let newArr = Arrays.filter((val) => {

    return val%2 != 0;
})

console.log(newArr);

// 3. Reduce -> it performs some operation and reduce the array to single value i.e it returns a 
// single value there are basically two components accumulator and current , current always points
// to one ahead accumulator , accumulator default value is start value of array

const ans = Arrays.reduce((acc, curr) => {

    return acc+curr;
}, 0)  // this 0 sets accumulator value 0

console.log(ans);







