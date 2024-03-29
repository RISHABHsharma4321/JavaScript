
function SetUsername(name) {

    this.name = name
}

function createUser(username, email, password) {
    
    // to hold the reference we have to use .call agter func name
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
    
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);