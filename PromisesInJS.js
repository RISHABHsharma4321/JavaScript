// PROMISE IS SOMETHING THAT REPRESENTS THE EVENTUAL COMPLETION OR FAILURE OF AN ASYNCHRONOUS AND
// ITS RESULTING VALUES

// PROMISE 1 : 

// HERE WE ARE DECLARING A PROMISE 
const promiseOne = new Promise(function(resolve, reject) {

    // do any async task
    setTimeout(function() {

        console.log("ASYNC TASK 1 DONE");
        resolve();

    }, 2000);
})

// HERE WE ARE CONSUMING THE PROMISE 
promiseOne.then(function() {

    console.log("PROMISE CONSUMED");
})

// WE CAN ALSO DIRECTLY WRITE PROMISE
new Promise(function(resolve, reject) {

    setTimeout(function(){

        console.log("ASYNC TASK DONE");
        resolve();
        
    }, 1000);
})
.then(function() {

    console.log("PROMISE CONSUMED SUCCESSFULLY");
})

// PROMISE 3 :

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(() => {

        console.log("ASYNC TASK 3 DONE ");
    }, 2000)

    resolve({username: "RONNIE", email: "ronnie@example.com"});
})

promiseThree.then((user) => {

    console.log(user);
})

// WE CAN ALSO PERFORM CHAINING i.e IF IN USER WE WANT USER NAME THEN WE CAN DO THAT

const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {

        // console.log("TASK DONE SUCCESSFULLY");
        const error = true;

        if(!error) {
            
            resolve({username: "RONNIE", email: "ronnie@example.com"});
        }
        else {

            reject('ERROR : Something went wrong');
        }
        

    }, 1000)
})

promiseFour.then((user) => {

    return user.username
})
.then((username) => {
    
    console.log("USERNAME = ", username);
})
.catch((error) => {                // catch block is used for handling reject callback

    console.log(error);
}).finally(() => console.log("PROMISE RESOLVED OR REJECTED"))


// WE CAN ALSO USE ASYNC AWAIT FOR CONSUMING PROMISES
// LET'S TAKE AN EXAMPLE OF NEW PROMISE

const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = true;

        if(!error) {

            resolve({username: "javascript", email: "example.com"})
        }
        else {

            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 1000)
});

async function consumepromiseFive() {

    // HERE WE HAVE TO INSERT IN TRY CATCH BLOCK BECAUSE IF THE PROMISE REJECTS THEN IT MAY CAUSE
    // ERROR SO TO GENTLY HANDLE IT WE WILL USE TRY CATCH BLOCK

    try {
        const response = await promiseFive;
        console.log(response);

    } catch (error) {
        
        console.log(error);
    }
}

// CALLING OF ASYNC FUNCTION
consumepromiseFive();


