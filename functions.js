function myfun() {

    console.log("RISHABH");
}

// myfun()

// add two numbers
// function addTwoNumbers(number1, number2) {
    
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 4);
// console.log("Result : ", result); // value undefined

function loginUserMessage(username) {

    return `${username} just logged in`
}

let value = loginUserMessage("RONNIE");
console.log(value);

// // ... -> rest operator

// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(2,4,5));

const user = {

    username: "ronnie", 
    price: 190
}

function handleObject(anyobject) {

    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // we can direct push and object also

const mynewarray = [200, 400, 100, 600]

function returnSecondValue(getArray) {

    return getArray[1]
}

console.log(returnSecondValue(mynewarray))  // we can directly pass an array also















