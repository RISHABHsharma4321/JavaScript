// normal function
function greet() {

    console.log("HELLO WORLD");
}
greet();

// The above function in terms of arrow function
/*
1. Remove function keyword from the above definition
2. Remove function_name from the definition
3. Add => after () to the above definition
4. Also store it in any variable
NOTE :- We can also pass parameters in the arrow function
*/

// SYNTAX 1 :-
const greetings = (count) => {
    
    for(let i=0; i<count; i++) {
        console.log("HELLO WORLD");
    }
}

greetings(3);

// SYNTAX 2 :- (in this case we do not have to write return statement)
const square = (num) => num*num;

console.log(square(3));


